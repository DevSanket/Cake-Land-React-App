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

firebase.initializeApp(firebaseConfig);


//Storing user data in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//Function for adding another collection in Database if we want
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


//Converting our snapshot into a perfect data for showing in  shop data
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


// card: {id: "card_1IpFseSGbelzIZUmGIj6JnhU", object: "card", address_city: "Satara", address_country: "India", address_line1: "At Post Shivthar tal dist Satara, At Post Shivthar tal dist Satara", …}
// cartItems: (2) [{…}, {…}]
// client_ip: "103.246.41.88"
// created: 1620579204
// email: "rohitpawar030396@gmail.com"
// id: "tok_1IpFseSGbelzIZUmeUmQ2e7o"
// livemode: false
// object: "token"
// price: 1697
// type: "card"
// used: false

// card:
// address_city: "Satara"
// address_country: "India"
// address_line1: "At Post Shivthar tal dist Satara, At Post Shivthar tal dist Satara"
// address_line1_check: "unchecked"
// address_line2: null
// address_state: "16"
// address_zip: "415011"
// address_zip_check: "unchecked"
// brand: "Visa"
// country: "US"
// cvc_check: "unchecked"
// dynamic_last4: null
// exp_month: 1
// exp_year: 2032
// funding: "credit"
// id: "card_1IpFtjSGbelzIZUmbaDV82BM"
// last4: "4242"
// name: "Rohit Pawar"
// object: "card"
// tokenization_method: null

// cartItems: Array(2)
// 0:
// id: 1
// imageUrl: "https://cdn.shopify.com/s/files/1/1060/3816/products/fantasy-chocolate-truffle-cake_900x.jpg?v=1594974395"
// name: "Chocolate Truffule"
// price: 499
// quantity: 3
// __proto__: Object
// 1:
// id: 18
// imageUrl: "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2017/05/Black-Forest-Cupcakes-4.jpg"
// name: "Black Fores"
// price: 200
// quantity: 1

//Store Order data in All Transaction Collection 
export const AllTransactionData =async (DataObject) => {

  const userRef = firestore.collection('all_transaction');
  try {
    await userRef.add({
      username : DataObject.card.name,
      email:DataObject.email,
      method:DataObject.card.object,
      price:`${DataObject.price}₹`,
      items:DataObject.cartItems
    });
  } catch (error) {
    console.log('error creating user', error.message);
  }


}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



