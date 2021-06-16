import React, { useContext, useState } from "react";
import { Comment } from "../../components";
import { db, storage } from "../../firebase";
import "./style.css";
import { CommentInput } from "../../components";
import { UserContext } from "../../contexts/user";
import { DarkModeContext } from "../../contexts/darkmode";

export default function Post({
  profileUrl,
  username,
  id,
  photoUrl,
  caption,
  comments,
}) {
  const [user, setUser] = useContext(UserContext).user;

  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var postCss = "post";
  var post__delete = "post__delete";
  if (DarkMode) {
    postCss = "post dark";
    post__delete = "post__delete dark";
  }

  var displayDelete = false;
  var currentUser = null;
  const postUserChecker = () => {
    if (user) {
      currentUser = user.email.replace("@gmail.com", "");
    }
    if (currentUser === username && currentUser !== null) {
      displayDelete = true;
    }
  };
  postUserChecker();

  const deletePost = () => {
    //delete the image from firebase storage

    //get reference to the image file we like to delete
    var imageRef = storage.refFromURL(photoUrl);

    //delete the file
    imageRef
      .delete()
      .then(function () {
        console.log("delete successfull");
      })
      .catch(function (error) {
        console.log(`Error delete${error}`);
      });

    //2 delete the post info from firbase firestore
    db.collection("posts")
      .doc(id)
      .delete()
      .then(function () {
        console.log("delete successfull from firebase");
      })
      .catch(function (error) {
        console.log(`Error post info delete from firebase ${error}`);
      });
  };

  return (
    <div className={postCss}>
      <div className="post__header">
        <div className="post__headerLeft">
          <img className="post__profilePic" src={profileUrl} />
          <p style={{ marginLeft: "8px" }}>{username}</p>
        </div>
        {displayDelete ? (
          <button onClick={deletePost} className={post__delete}>
            Delete
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="post__center">
        <img className="post__photoUrl" src={photoUrl}></img>
      </div>

      <div>
        <p>
          <span style={{ fontWeight: "600", marginRight: "4px" }}>
            {username}
          </span>
          {caption}
        </p>
      </div>

      {comments ? (
        comments.map((comment) => (
          <Comment username={comment.username} caption={comment.comment} />
        ))
      ) : (
        <div></div>
      )}
      {user ? <CommentInput comments={comments} id={id} /> : <div />}
    </div>
  );
}
