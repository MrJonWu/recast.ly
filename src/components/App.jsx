class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.caller = this.caller.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.search = this.search.bind(this);
    this.videos = [{id: 0, snippet: {title: '', thumbnails: {default: {url: ''}}}}];
    this.state = {
      all: this.videos,
      playing: this.videos[0],
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
    }
  }
  componentDidMount() {
    console.log('props', this.props);
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'puppies', max: 8}, this.caller);
    //console.log('this.state,', this.state);
    // this.setState({
    //   all: this.videos,
    //   playing: this.videos[0]
    // });
  }
  caller(data) {
    this.videos = data;
    if (this.state.playing.id === 0) {
      this.setState({
        all: this.videos,
        playing: this.videos[0]
      });
    } else {
      this.setState({
        all: this.videos
      });
    }
    
    console.log('VIDEOS!!!!!!!', this.videos);
  }
  search(e) {
    console.log('text ', e.target.value);
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: e.target.value, max: 8}, this.caller);
  }
  render() {
    return (
      <div>
        <Nav search={this.search}/>
        <div className="col-md-7">
          <VideoPlayer state = {this.state} video={this.state.playing}/>
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
