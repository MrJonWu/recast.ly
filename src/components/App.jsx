class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.caller = this.caller.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.search = this.search.bind(this);
    this.commentsCaller = this.commentsCaller.bind(this);
    this.viewsCaller = this.viewsCaller.bind(this);
    this.videos = [{id: 0, snippet: {title: '', thumbnails: {default: {url: ''}}}}];
    this.comments = [{snippet: {topLevelComment: { snippet: {authorChannelUrl: '', authorDisplayName: '', authorProfileImageUrl: '', textDisplay: '', likeCount: 0}}}}];
    this.state = {
      all: this.videos,
      playing: this.videos[0],
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: this.comments
    };
  }
  // search() {
  //   props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'rocket+league', max: 10}, this.componentDidMount);
  // }
  click(vid) {
    if (vid !== undefined) {
      this.setState({
        playing: vid
      });
      this.render();
      this.props.searchViews({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.viewsCaller);
      this.props.searchComments({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.commentsCaller);
    }
  }

  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'puppies', max: 8}, this.caller);
  }

  viewsCaller(item) {
    this.setState({
      views: item.viewCount,
      likes: item.likeCount,
      dislikes: item.dislikeCount
    });
  }

  commentsCaller(comments) {
    this.setState({
      comments: comments
    });
  }

  caller(data) {
    this.videos = data;
    if (this.state.playing.id === 0) {
      this.props.searchViews({key: window.YOUTUBE_API_KEY, id: this.videos[0].id.videoId}, this.viewsCaller);
      this.props.searchComments({key: window.YOUTUBE_API_KEY, id: this.videos[0].id.videoId}, this.commentsCaller);
      this.setState({
        all: this.videos,
        playing: this.videos[0]
      });

    } else {
      this.setState({
        all: this.videos
      });
    }
  }

  search(e) {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: e.target.value, max: 8}, this.caller);
  }
  render() {
    return (
      <div>
        <Nav search={this.search}/>
        <div className="col-md-7">
          <VideoPlayer state = {this.state} video={this.state.playing}/>
          <CommentList comments={this.state.comments} />
        </div>
        <div className="col-md-5">
          <VideoList click={this.click} state = {this.state} videos={this.state.all}/>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
