class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      all: exampleVideoData,
      playing: exampleVideoData[0],
    };
  }
  click(vid) {
    if (vid !== undefined) {
      //console.log('click shit', this);
      this.setState({
        playing: vid
      });
      this.render();
    }
  }
  render() {
    return (
      <div>
        <Nav />
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
