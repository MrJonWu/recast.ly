var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + options.max + '&q=' + options.query + '&type=video&videoEmbeddable=true&key=' + options.key,
    type: 'GET',
    success: function (data) {
      console.log('youtube: Message received', data.items);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('youtube: Failed to receive message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
