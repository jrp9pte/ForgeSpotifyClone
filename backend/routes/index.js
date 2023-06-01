var express = require('express');
const querystring = require('querystring');
var router = express.Router();
const db = require("./firebase")
require('firebase/auth')

const  {deleteDoc, updateDoc, setDoc, getDocs, collection,where, query, doc} = require("firebase/firestore")
const { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} = require("firebase/auth");
// const { useRadioGroup } = require('@material-ui/core');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/login', async(req,res)=>{
  const {password, email} = req.body
  // Need to make sure email and password exists within db

  // Search through db, fetch the user with matching uid, res.send(uid, spotify access_token)

  // login page, authorize with spotify 
  
  // For username, make a call to spotify API and store that username later
  try{
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth,email,password)
    const q = query(collection(db,'User'), where('uid', "==", userCredential.user.uid))
    const querySnapshot = await getDocs(q)

    const client_id = process.env.REACT_APP_Client_id
    const scope = "user-top-read"
    const redirect_uri= "http://localhost:3000/accountcreation"
    const url = "https://accounts.spotify.com/en/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scope+"&response_type=token&show_dialog=true"
    res.redirect(url)

    let data = []
    querySnapshot.forEach((doc) => {
      data.push(doc.data().access_token)
      console.log(data[0])
    });
    const result = {uid: userCredential.user.uid, access_token: data[0]}
    // res.send(result)

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
                                      // username: username,
                                      // password: password,
                                      email: email,
                                      access_token: access_token,
                                      uid: userCredential.user.uid
                    });
    }
    catch(error){
      console.log(error)
    }
  }
  else{
    res.send("cant-create!")
    
  }

  
})
router.post('/spotifycodes', async(req,res)=>{
  const {authorizationcode} = req.body
  const client_id = process.env.REACT_APP_Client_id
  const client_secret = process.env.REACT_APP_Client_secret
  const redirect_uri= "http://localhost:3000/accountcreation"
  try {
    
    const url =
      "https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" +
      authorizationcode +
      "&redirect_uri=" +
      redirect_uri;
    const headers = {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret, "utf8").toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };
    fetch(url, { method: "post", headers: headers })
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => {
        obj = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        };
        return obj;
      })
      .then((obj) => res.status(200).json(obj));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

 
})

router.get('/spotifyAuthorize', (req,res) =>{
    const client_id = process.env.REACT_APP_Client_id
    const scope = "user-top-read"
    const redirect_uri= "http://localhost:3000/accountcreation"
    const url = "https://accounts.spotify.com/en/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scope+"&response_type=code&show_dialog=true"
    
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
