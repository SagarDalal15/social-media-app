import React, { useContext, useEffect, useState } from "react";
import { SignInBtn } from "../../components";
import { UserContext } from "../../contexts/user";
import "./style.css";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import makeId from "../../helper/functions";
import { db, storage } from "../../firebase";

import firebase from "firebase";
import { DarkModeContext } from "../../contexts/darkmode";

export default function CreatePost() {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [DarkMode, setDarkMode] = useContext(DarkModeContext).DarkMode;
  var createPost__loggedInCss = "createPost__loggedIn";
  var createPost__textarea = "createPost__textarea";
  if (DarkMode) {
    createPost__textarea = "createPost__textarea dark";
    createPost__loggedInCss = "createPost__loggedIn dark";
  }

  firebase.auth().onAuthStateChanged(function (user) {
    setUser(user);
  });

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

      var imagePreview = document.getElementById("image-preview");

      imagePreview.src = selectedImageSrc;
      imagePreview.style.display = "block";
    }
  };

  const handleUpload = () => {
    if (image) {
      var imageName = makeId(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function

          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //get download url and upload the post info
          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.Timestamp.now(),
                caption: caption,
                photoUrl: imageUrl,
                username: user.email.replace("@gmail.com", ""),
                profileUrl: user.photoURL
                  ? user.photoURL
                  : "https://firebasestorage.googleapis.com/v0/b/reactsocialapptutorial.appspot.com/o/images%2Fblank-profile.webp?alt=media&token=d749fb07-d371-4927-b3d7-ac16abd31c9e",
              });
            });
          setCaption("");
          setProgress(0);
          setImage(null);
          document.getElementById("image-preview").style.display = "none";
          console.log("image nulled");
        }
      );
    }
  };

  return (
    <div className="createPost">
      {user ? (
        <div className={createPost__loggedInCss}>
          <p>Create Post</p>
          <div className="createPost__loggedInCenter">
            <textarea
              placeholder="enter caption here.."
              className={createPost__textarea}
              rows="3"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div className="createPost__imagePreview">
              <img id="image-preview" alt="" />
            </div>
          </div>
          <div className="creatPost__loggedInBottom">
            <div className="createPost__imageUpload">
              <label htmlFor="fileInput">
                <AddAPhotoIcon
                  style={{ cursor: "pointer", fontSize: "20px" }}
                />
              </label>

              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleChange}
              ></input>
            </div>
            <button
              className="createPost__uploadBtn"
              onClick={handleUpload}
              style={{
                color: DarkMode
                  ? caption
                    ? "#FFFFFF"
                    : "lightgrey"
                  : caption
                  ? "#000"
                  : "lightgrey",
              }}
            >
              {`Upload ${progress != 0 ? progress : ""}`}
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
