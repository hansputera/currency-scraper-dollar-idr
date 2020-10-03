import { Router } from "express";
import CurrencyScrape from "../../App";
import config from "../../../config.json";

const cooldown = new Set();

const router = Router();
router.get("/", (req, res) => {
    if (cooldown.has(req.ip)) return res.status(429).json({ success: false, message: "429 Rate Limited IP", cooldown: Date.now() + config.cooldown });
    const API = new CurrencyScrape();
    API.got().then((val) => {
        res.status(200).json({ success: true, result: val });
    }).catch((err) => {
        res.status(500).json({ success: false, message: err, cooldown: Date.now() + config.cooldown });
    });
    setTimeout(() => {
        cooldown.delete(req.ip);
    }, config.cooldown);
    cooldown.add(req.ip);
});

export = router;