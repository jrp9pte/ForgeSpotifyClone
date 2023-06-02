const express = require("express");
const admin = require("firebase-admin");
const { getDocs, collection } = require("firebase/firestore");
const { db } = require("./firebase");
const router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    console.log(db);
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
