import CommentsItem from "./CommentsItem";
import {useEffect, useState} from "react";
import http from "../http";

const Comments = ({onClick,comments,comment,setComment,sendComment}) => {
  return (
    <div className="storys-comments">
      <div className="storys-comments-header">
        <h4>Комментарии </h4>
        <span onClick={onClick}>Закрыть</span>
      </div>

      <div className="storys-comments-body">
        {comments === null && "Loading..."}
        {comments !== null && comments.length === 0 && "Empty"}
          {comments && comments.map((x,k)=>(
              <CommentsItem key={k} data={x} />
          ))}
        {/*{commentsData.map((comment, index) => (

        ))}*/}
      </div>

      <div className="storys-comments-footer">
        <div className="w-100">
         <input value={comment} onChange={setComment} className="comment-field w-100"/>
        </div>
        <span onClick={sendComment} className="comment-btn">
          <img src="./img/send-svgrepo-com.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Comments;
