const {google} = require('googleapis');

const youtube = google.youtube({
    version: 'v3',
    auth: 'INSERT_HERE_YOUR_API_KEY'
});

youtube.commentThreads.list({
    'part': 'snippet',
    'videoId': 'INSERT_VIDEO_ID_HERE'
}).then( response => {
    console.log(response.data.items.length);
    for(const comment of response.data.items)
        console.log(comment.snippet.topLevelComment);
});

// TODO: Returned only 20 commentaries
