const {google} = require('googleapis');

const youtube = google.youtube({
    version: 'v3',
    auth: 'INSERT_HERE_YOUR_YOUTUBE_API_KEY'
});

function getPersonInfo(item) {
    const comment = item.snippet.topLevelComment.snippet;
    return {
        id:     comment.authorChannelUrl,
        name:   comment.authorDisplayName,
        avatar: comment.authorProfileImageUrl,
        text:   comment.textDisplay
    }
}

function processResponse(response, action) {
    return response.data.items.map(action);
}

async function getComments(videoId) {
    const startTime = Date.now();

    let comments = [];

    const options = {
        'part': 'snippet',
        'videoId': videoId,
        'maxResults': 100
    }

    let nextPageToken;
    const response = await youtube.commentThreads.list(options);
    
    nextPageToken = response.data.nextPageToken;
    comments = comments.concat(processResponse(response, getPersonInfo));

    while (nextPageToken) {
        options.pageToken = nextPageToken;
        
        console.log('Count: ', comments.length);

        const response = await youtube.commentThreads.list(options);
        comments = comments.concat(processResponse(response, getPersonInfo));
        nextPageToken = response.data.nextPageToken;
    }

    console.log(comments.length);
    const totalTime = Date.now() - startTime;
    console.log(`Time spent: ${totalTime}ms`)
}

getComments('INSERT_HERE_VIDEO_ID');
