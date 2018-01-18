import firebase from "firebase";

export default {
  user: {
    login: credentials =>
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password),
    logout: () => firebase.auth().signOut()
  }
};
