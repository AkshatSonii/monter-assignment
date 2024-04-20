const express = require("express");
const {register, verifyOtp , addDetails, login , allDetails} = require("../controllers/userController");
const { verifyToken } = require("../middleware/verifyToken.js");

const router = express.Router();

router.route("/register").post(register);
router.route("/otp-verify").post(verifyOtp);
router.route("/addDetails").post(addDetails);
router.post("/login", login);
router.route("/details").get(verifyToken, allDetails);

module.exports = router;