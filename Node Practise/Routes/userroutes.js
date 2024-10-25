const { Router } = require("express");

const router = Router();

const { createUser,getall,remove,update,getbyid} = require("../Controllers/usercontroller");

router.post("/createUser", createUser);
router.get("/getall",getall);
router.post("/delete/:id",remove)
router.post("/update/:id",update)
router.get("/getbyid/:id",getbyid)

module.exports = router;
