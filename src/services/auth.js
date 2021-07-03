import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  let user;
  await auth
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return user;
};

export const logout = async () => {
  let logout_success;
  await auth
    .signOut()
    .then(() => {
      logout_success = true;
    })
    .catch((error) => {
      console.log(error.message);
    });

  return logout_success;
};

// My code
export const signUpWithEmail = async (email, password) => {
  let user;
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      return error;
    });
  return user;
};

export const signInWithEmail = async (email, password) => {
  let user;
  await auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      return error;
    });
  return user;
};
