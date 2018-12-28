import React from 'react';
import Comment from '../Comment/Comment';

const CommentsList = ({comments}) => {
  return (
    <React.Fragment>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment}/>)
      }
    </React.Fragment>
  );
};

export default CommentsList;
