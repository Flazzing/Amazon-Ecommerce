const router = require("express").Router();
const {getCount} = require("../models/product/product")

router.get('/', async (req, res) => {
    console.log("this is called");
    const count = await getCount();
    if (count.size > 0){
        res.json(count.docs[0].data());
    }
    else {
        res.json({status: "Not found!"})
    }
})

module.exports = router;
