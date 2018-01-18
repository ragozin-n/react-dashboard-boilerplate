import firebase from "firebase";

export default {
  user: {
    login: credentials =>
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password),
    verifyUserStatus: () =>
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          return user;
        }
        return null;
      })
  }
};
