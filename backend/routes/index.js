var express = require('express');
const querystring = require('querystring');
var router = express.Router();
const db = require("./firebase")
const  {deleteDoc, updateDoc, setDoc, getDocs, collection, doc} = require("firebase/firestore")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/spotifyAuthorize', async (req,res) =>{
  const client_id = process.env.REACT_APP_Client_id
  console.log(client_id)
  res.send(client_id);
  
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
