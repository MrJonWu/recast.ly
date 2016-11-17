var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'https://api.parse.com/1/classes/messages',
    type: 'GET',
    dataType: options.query,
    success: function (data) {
      console.log('chatterbox: Message sent');
      return callback();
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

window.searchYouTube = searchYouTube;
