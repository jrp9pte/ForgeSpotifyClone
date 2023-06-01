const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
// const { getFirestore } = require("firebase/firestore");
// const admin = require("firebase-admin")
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };
  
  const firebase = initializeApp(firebaseConfig)
  const db = getFirestore(firebase)

// const serviceAccount = require("../permissions.json");



// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// })
// const app = initializeApp(serviceAccount);
// const db = getFirestore(app);


// module.exports = {admin,db,firebase};
module.exports=db;