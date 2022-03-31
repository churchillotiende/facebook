import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCrmoKsPNcqOhKEEZ-74GMoW6-nncy2LyM",
    authDomain: "facebook-b818c.firebaseapp.com",
    projectId: "facebook-b818c",
    storageBucket: "facebook-b818c.appspot.com",
    messagingSenderId: "96856742338",
    appId: "1:96856742338:web:bbb299029f396baaad1e5b",
    measurementId: "G-DCCTLW5MTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

