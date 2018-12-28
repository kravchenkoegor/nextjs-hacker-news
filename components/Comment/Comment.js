import React from 'react';
import './Comment.scss';

const Comment = ({comment}) => {
  return (
    <div className="comment">
      <div className="comment__user">
        {comment.user}
      </div>

      <div
        className="comment__content"
        dangerouslySetInnerHTML={{__html: comment.content}}
      />

      {comment.comments && (
        <div className="comment__nested">
          {comment.comments.map(nestedComment => (
            <Comment key={nestedComment.id} comment={nestedComment}/>)
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
