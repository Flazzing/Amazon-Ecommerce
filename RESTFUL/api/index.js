const router = require("express").Router();

router.use("/customer", require("./customer"));
router.use("/products", require("./product"));

module.exports = router;
