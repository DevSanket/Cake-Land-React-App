import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBYqXBNPY-R3-g0t3ln1NlRkp_Vl19Teew",
    authDomain: "cakeland-0.firebaseapp.com",
    projectId: "cakeland-0",
    storageBucket: "cakeland-0.appspot.com",
    messagingSenderId: "687679341886",
    appId: "1:687679341886:web:4a4f901a77e38007ad586f",
    measurementId: "G-W19SYRC5Z7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  //Adding User Data to Firebase
  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName,email} = userAuth;
      const createdAt = new Date();
      try{
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
      }catch(error){
           console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
