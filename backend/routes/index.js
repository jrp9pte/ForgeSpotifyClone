var express = require('express');
const querystring = require('querystring');
var router = express.Router();
// const db = require("./firebase")
// const {admin,db} = require("./firebase")
const db = require("./firebase")
require('firebase/auth')

const  {deleteDoc, updateDoc, setDoc, getDocs, collection,where, query, doc} = require("firebase/firestore")
const { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} = require("firebase/auth");
const { useRadioGroup } = require('@material-ui/core');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', async(req,res)=>{
  const {username, password, email} = req.body
  // Need to make sure email and password exists within db

  // Search through db, fetch the user with matching uid, res.send(uid, spotify access_token)

  // login page, authorize with spotify 
  // get rid of username fields for login and signup, delete username field dont store it
  // everytime we need a username 
  try{
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth,email,password)
    res.send(userCredential)
  }
  catch(error){
    console.log(error)
  }
  console.log("router works", password, email)
  
})

router.post('/savetodb',async(req,res) =>{
  // const auth = getAuth();
  const {username, password, email,  access_token} = req.body
  // if the email already exists with a user account, need to send an alert
  const userCollection = collection(db, "User")
  const q = query(userCollection,where('email', '==', email))
  const querySnapshot = await getDocs(q);
  let data = []
  querySnapshot.forEach((doc) => {
    data.push(doc.data())
  });
  if (data.length === 0 ){
    res.send("created!")
    try{
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'User', Math.random().toString()), {
                                      username: username,
                                      // password: password,
                                      email: email,
                                      access_token: access_token,
                                      uid: userCredential.user.uid
                                    });
      // admin.auth().createUser({email:email, 
      //                           password: password,
      //                           username: username,
      //                           access_token: access_token})
      //                           .then((userRecord)=>{
      //                             setDoc(doc(db, 'User', Math.random().toString()), {
      //                               username: username,
      //                               // password: password,
      //                               email: email,
      //                               access_token: access_token,
      //                               uid: userRecord.uid 
      //                             });
      //                           });
    }
    catch(error){
      console.log(error)
    }
  }
  else{
    res.send("cant-create!")
    
  }

  
})

router.get('/spotifyAuthorize', (req,res) =>{
    const client_id = process.env.REACT_APP_Client_id
    const scope = "user-top-read"
    const redirect_uri= "http://localhost:3000/accountcreation"
    const url = "https://accounts.spotify.com/en/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scope+"&response_type=token&show_dialog=true"
    res.redirect(url)
  })

router.get("/info", async (req, res, next) => {
  const allDocData = []
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "User"))
  docs.forEach((doc) => allDocData.push([doc.data(),doc.id]))
  docs.forEach((doc) => console.log(doc.data()))
  res.json({result: allDocData})
})
module.exports = router;
