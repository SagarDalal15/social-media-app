import React, { useContext, useState } from "react";
import "./style.css";
import { UserContext } from "../../contexts/user";
import { db } from "../../firebase";
import { DarkModeContext } from "../../contexts/darkmode";

export default function CommentInput({ comments, id }) {
  const [comment, setComment] = useState("");

  const [user, setUser] = useContext(UserContext).user;
  const [commentArray, setCommentArray] = useState(comments ? comments : []);

  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var commentInput__btnCss = "commentInput__btn";
  var commentInput__textarea = "commentInput__textarea";
  if (DarkMode) {
    commentInput__textarea = "commentInput__textarea dark";
    commentInput__btnCss = "commentInput__btn dark";
  }

  const addComment = () => {
    if (comment != "") {
      //add comment to the post info
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
      });

      db.collection("posts")
        .doc(id)
        .update({
          comments: commentArray,
        })
        .then(function () {
          setComment("");
          console.log("comment added");
        })
        .catch(function (error) {
          console.log(`Error ${error}`);
        });
    }
  };
  return (
    <div className="commentInput">
      <textarea
        className={commentInput__textarea}
        rows="1"
        placeholder="write a comment.."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button onClick={addComment} className={commentInput__btnCss}>
        Post
      </button>
    </div>
  );
}
