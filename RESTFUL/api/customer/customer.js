const router = require("express").Router();
const Firestore = require("@google-cloud/firestore");
const db = new Firestore();


router.get('/', async (req, res) => {
    res.json({status: "Customer works fine"});
})

module.exports = router;
