  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBU35MoFKhbTRTwOwxYOwnjDg9N6j4WMBg",
    authDomain: "hystersis-69801.firebaseapp.com",
    databaseURL: "https://hystersis-69801.firebaseio.com",
    projectId: "hystersis-69801",
    storageBucket: "hystersis-69801.appspot.com",
    messagingSenderId: "456383164809"
  };
  firebase.initializeApp(config);

  const db = app.database()
  export default db