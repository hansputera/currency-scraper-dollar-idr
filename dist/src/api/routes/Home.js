"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const App_1 = __importDefault(require("../../App"));
const cooldown = new Set();
const router = express_1.Router();
router.get("/", (req, res) => {
    if (cooldown.has(req.ip))
        return res.status(429).json({ success: false, message: "429 Rate Limited IP" });
    const API = new App_1.default();
    API.got().then((val) => {
        res.status(200).json({ success: true, result: val });
    }).catch((err) => {
        res.status(500).json({ success: false, message: err });
    });
    setTimeout(() => {
        cooldown.delete(req.ip);
    }, 40 * 1000);
    cooldown.add(req.ip);
});
module.exports = router;
