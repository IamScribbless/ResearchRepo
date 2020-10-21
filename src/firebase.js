import firebase from 'firebase'; 

const config = {
    apiKey: "AIzaSyB6RfgLt2nu3kmo3-6ECEr1oLxM3s_Dktw",
    authDomain: "research-home.firebaseapp.com",
    databaseURL: "https://research-home.firebaseio.com/",
   // storageBucket: "bucket.appspot.com"
  };

  
 
const app = firebase.initializeApp(config);

  // Get a reference to the database service
export const database = firebase.database();

