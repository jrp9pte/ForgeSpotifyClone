const { collection, getDocs } = require("firebase/firestore");
const db = require("./firebase"); // Assuming the configuration is in a separate file called "firebase.js"
var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allUserData = [];
    const usersSnapshot = await getDocs(collection(db, "User"));
    usersSnapshot.forEach((doc) => {
      allUserData.push({ id: doc.id, ...doc.data() });
    });
    res.json({ result: allUserData });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
