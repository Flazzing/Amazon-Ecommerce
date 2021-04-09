const router = require("express").Router();
const {getCount} = require("../models/product")

router.get('/', async (req, res) => {
    const count = await getCount();
    if (count.size > 0){
        res.json({status: "success"});
    }
    else {
        res.json({status: "Not found!"})
    }
})

module.exports = router;
