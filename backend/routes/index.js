var express = require("express");
const querystring = require("querystring");
var router = express.Router();
const axios = require("axios");
const db = require("./firebase");
require("firebase/auth");

const {
  deleteDoc,
  updateDoc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  where,
  query,
  doc,
} = require("firebase/firestore");
const {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} = require("firebase/auth");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/GetUsername", async (req, res) => {
  const { access_token } = req.body;
  const response = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  // Extract the user profile from the API response
  const profile = response.data;
  res.json({ profile });
});

router.post("/SetUsername", async (req, res) => {
  const { username, email, password } = req.body;
  const userCollection = collection(db, "User");
  const q = query(userCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let docid = [];
  querySnapshot.forEach((doc) => {
    docid.push(doc.id);
  });
  const docref = doc(db, "User", docid[0]);
  const update = {
    username: username,
  };
  updateDoc(docref, update);
});

router.post("/login", async (req, res) => {
  const { password, email } = req.body;

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // TODO: Need to send error messages back stating invalid email, account already exists,
    // invalid credentials
    console.log(userCredential);
    const q = query(
      collection(db, "User"),
      where("uid", "==", userCredential.user.uid)
    );
    const querySnapshot = await getDocs(q);
    const client_id = process.env.REACT_APP_Client_id;
    const client_secret = process.env.REACT_APP_Client_secret;
    const redirect_uri = "http://localhost:3000/accountcreation";
    let data = [];
    let docid = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data().refresh_token);
      docid.push(doc.id);
    });

    // After every login, refresh token should be used to make new access tokens
    try {
      const refresh_token = data[0];
      const url =
        "https://accounts.spotify.com/api/token?grant_type=refresh_token&refresh_token=" +
        refresh_token +
        "&redirect_uri=" +
        redirect_uri;
      const headers = {
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret, "utf8").toString(
            "base64"
          ),
        "Content-Type": "application/x-www-form-urlencoded",
      };
      console.log(url);
      fetch(url, { method: "post", headers: headers })
        .catch((err) => console.log(err))
        .then((res) => res.json())
        .then((data) => {
          const result = {
            uid: userCredential.user.uid,
            access_token: data.access_token,
            docid: docid[0],
          };
          const docref = doc(db, "User", docid[0]);
          const update = {
            access_token: data.access_token,
          };
          updateDoc(docref, update);

          res.send(result);

          // Using new access token, call to spotify and grab username to save to doc
        });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/savetodb", async (req, res) => {
  // const auth = getAuth();
  const { password, email, access_token, refresh_token } = req.body;
  console.log(access_token, refresh_token);
  // if the email already exists with a user account, need to send an alert
  const userCollection = collection(db, "User");
  const q = query(userCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  if (data.length === 0) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "User", Math.random().toString()), {
        email: email,
        username: "placeholder",
        access_token: access_token,
        refresh_token: refresh_token,
        uid: userCredential.user.uid,
      });

      res.send("created!");
    } catch (error) {
      console.log("error");
    }
  } else {
    res.send("cant-create!");
  }
});
router.post("/spotifycodes", async (req, res) => {
  const { authorizationcode } = req.body;
  const client_id = process.env.REACT_APP_Client_id;
  const client_secret = process.env.REACT_APP_Client_secret;
  const redirect_uri = "http://localhost:3000/accountcreation";
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
});

router.get("/spotifyAuthorize", (req, res) => {
  const client_id = process.env.REACT_APP_Client_id;
  const scope =
    "user-top-read user-read-private user-read-email user-library-read";
  const redirect_uri = "http://localhost:3000/accountcreation";
  const url =
    "https://accounts.spotify.com/en/authorize?client_id=" +
    client_id +
    "&redirect_uri=" +
    redirect_uri +
    "&scope=" +
    scope +
    "&response_type=code&show_dialog=true";
  res.redirect(url);
});

router.get("/info", async (req, res, next) => {
  const allDocData = [];
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "User"));
  docs.forEach((doc) => allDocData.push([doc.data(), doc.id]));
  docs.forEach((doc) => console.log(doc.data()));
  res.json({ result: allDocData });
});

router.post("/sendMessage", async (req, res) => {
  const { refstring, message, currentUsername } = req.body;

  const docref = doc(db, "Messages", refstring);
  const MessageDoc = await getDoc(docref);
  if (MessageDoc.exists()) {
    let chats = MessageDoc.data().chats;
    chats.push({ [currentUsername]: message });
    console.log(chats);
    setDoc(docref, {
      chats: chats,
    });
  } else {
    console.log("DNE");
  }
});

router.post("/getMessageReference", async (req, res) => {
  const { uid, access_token, username } = req.body;
  const userCollection = collection(db, "User");
  console.log(uid);
  const q = query(userCollection, where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });
  const currentUsername = data[0].username;
  const messageArray = data[0].messages;
  // for(let i =0; i < messageArray.length; ++i){
  //   console.log(messageArray[i].field)
  // }

  messageArray.forEach(function (item) {
    for (var key in item) {
      if (key === username) {
        const specificMessageRef = item[key];
        res.send({
          refstring: specificMessageRef.id,
          currentUsername: currentUsername,
        });
        console.log(specificMessageRef.id);
        break;
      }
    }
  });
});

module.exports = router;
