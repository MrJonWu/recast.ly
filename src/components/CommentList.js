var CommentList = (props) => (
  //console.log(props.video);
  <div className="video-list">
    {props.comments.map(comment => <CommentListEntry comment={comment}/>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
CommentList.propTypes = {
  comments: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CommentList = CommentList;
