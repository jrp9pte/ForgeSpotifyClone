var { db } = require("./firebase");

var express = require("express");
var router = express.Router();
var { getFirestore, collection, getDocs } = require("firebase/firestore");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const usersCollectionRef = collection(db, "User");
    const snapshot = await getDocs(usersCollectionRef);
    const users = snapshot.docs.map((doc) => doc.data());
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

module.exports = router;
