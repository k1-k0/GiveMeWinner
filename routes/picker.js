const { google } = require('googleapis');
const { readAPIKey } = require('../utils/apigetter');

const youtube = google.youtube({
  version: 'v3',
  auth: readAPIKey(),
});

function getPersonInfo(item) {
  const comment = item.snippet.topLevelComment.snippet;
  return {
    url: comment.authorChannelUrl,
    name: comment.authorDisplayName,
    avatar: comment.authorProfileImageUrl,
    text: comment.textDisplay,
  };
}

function processResponse(response, action) {
  return response.data.items.map(action);
}

function getRandomWinner(candidates) {
  return candidates[Math.floor(Math.random() * candidates.length)];
}

async function getComments(videoId) {
  let comments = [];

  const options = {
    part: 'snippet',
    videoId,
    maxResults: 100,
  };

  let nextPageToken;
  const response = await youtube.commentThreads.list(options);

  nextPageToken = response.data.nextPageToken;
  comments = comments.concat(processResponse(response, getPersonInfo));

  while (nextPageToken) {
    options.pageToken = nextPageToken;

    const nextResponse = await youtube.commentThreads.list(options);
    comments = comments.concat(processResponse(nextResponse, getPersonInfo));
    nextPageToken = nextResponse.data.nextPageToken;
  }

  console.log(`Return ${comments.length} comments`);

  return comments;
}

async function pickWinner(videoId) {
  const candidates = await getComments(videoId);
  console.log(`Start pick winner of ${candidates.length} candidates ...`);
  return getRandomWinner(candidates);
}

module.exports.pickWinner = pickWinner;
