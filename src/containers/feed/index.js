import React, { useContext, useEffect, useState } from "react";
import { Post } from "..";
import { DarkModeContext } from "../../contexts/darkmode";
import { db } from "../../firebase";
import "./style.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var feedCss = "feed";
  if (DarkMode) {
    feedCss = "feed dark";
  }

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log(snapshot.docs);
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className={feedCss}>
      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            id={id}
            profileUrl={post.profileUrl}
            username={post.username}
            photoUrl={post.photoUrl}
            caption={post.caption}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
}
