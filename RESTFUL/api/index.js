const router = require("express").Router();

router.use("/customer", require("./customer/customer"));

module.exports = router;
