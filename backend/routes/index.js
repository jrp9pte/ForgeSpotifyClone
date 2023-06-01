var express = require('express');
const querystring = require('querystring');
var router = express.Router();
// const db = require("./firebase")
const {admin,db} = require("./firebase")
// const admin = require("./firebase")

const  {deleteDoc, updateDoc, setDoc, getDocs, collection, doc} = require("firebase/firestore")
const { createUserWithEmailAndPassword} = require("firebase/auth")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/savetodb',async(req,res) =>{
  // const auth = getAuth();
  const {username, password, email, access_token} = req.body
  try{
    // const a = admin.auth().createUserWithEmailAndPassword(email, password)
    admin.auth().createUser({email:email, 
                              password: password,
                              username: username,
                              access_token: access_token})
                              .then((userRecord)=>{
                                setDoc(doc(db, 'User', Math.random().toString()), {
                                  username: username,
                                  // password: password,
                                  email: email,
                                  access_token: access_token,
                                  uid: userRecord.uid 
                                });
                              });
  }
  catch(error){
    console.log(error)
  }
  res.send("created!")
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
