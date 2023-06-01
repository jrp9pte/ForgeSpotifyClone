const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const admin = require("firebase-admin")


const serviceAccount = require("../permissions.json");



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
const app = initializeApp(serviceAccount);
const db = getFirestore(app);


module.exports = {admin,db};