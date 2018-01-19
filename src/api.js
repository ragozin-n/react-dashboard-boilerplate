import firebase from "firebase";

export default {
  user: {
    login: credentials =>
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password),
    logout: () => firebase.auth().signOut(),
    onAuthStateChange: callback => firebase.auth().onAuthStateChanged(callback),
    signup: credentials =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(user => {
          if (user && user.emailVerified === false) {
            user.sendEmailVerification();
          }
        })
  }
};
