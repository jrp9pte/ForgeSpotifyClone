const { collection, getDocs, updateDoc, doc } = require("firebase/firestore");
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
router.put("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const isPublic = req.body.public; // Use the correct field name "public"

    const userRef = doc(db, "User", userId);
    console.log(userRef);
    await updateDoc(userRef, { public: isPublic }); // Use the correct field name "public"

    res.json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
