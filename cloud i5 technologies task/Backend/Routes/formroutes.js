const { Router } = require("express");

const router = Router();

const { createForm} = require("../Controllers/formcontroller");

router.post("/createForm", createForm);

module.exports = router;
