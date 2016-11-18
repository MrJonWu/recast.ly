var CommentListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
    </div>
    <div className="comment-body">
      <a href ={props.comment.snippet.topLevelComment.snippet.authorChannelUrl}>
        <div className="video-list-entry-title">{props.comment.snippet.topLevelComment.snippet.authorDisplayName}</div>
      </a>
      <div className="comment-text">{_.unescape(props.comment.snippet.topLevelComment.snippet.textDisplay)}</div>
      <div>Like Count: {props.comment.snippet.topLevelComment.snippet.likeCount}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
CommentListEntry.propTypes = {
  comment: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CommentListEntry = CommentListEntry;
 