const { Router } = require("express");

const router = Router();

const { createFaq ,getall,remove,update} = require("../Controllers/faqcontroller");

router.post("/createFaq", createFaq);
router.get("/getall",getall);
router.post("/delete/:id",remove)
router.post("/update/:id",update)

module.exports = router;
