var express = require('express');
var app = express();
var redirect_uri = 'http://localhost:9000/login';
var router = express.Router();
const db = require("./firebase")
const  {deleteDoc, updateDoc, setDoc, getDocs, collection, doc} = require("firebase/firestore")
const client_id = process.env_REACT_APP_Client_id
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/spotifyAuthorize', function(req,res) {
  var state = generateRandomString(16);
  var scope = "user-top-read";
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
  

  
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
