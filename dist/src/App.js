"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseConfig_1 = require("./BaseConfig");
const Error_1 = __importDefault(require("./utils/Error"));
class CurrencyScrape {
    constructor(opt, cheerioOpt) {
        this.opt = opt;
        this.cheerioOpt = cheerioOpt;
        this.url = `${BaseConfig_1.config.baseURL}/search?q=${encodeURIComponent(this.opt.keyword || BaseConfig_1.config.keyword)}`;
        this.options = {
            url: this.url,
            headers: {
                "user-agent": this.opt.userAgent || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
            }
        };
    }
    async got() {
        return new Promise((resolve, reject) => {
            BaseConfig_1._client.req(this.options, (error, response, data) => {
                if (error) {
                    reject(error);
                    throw new Error_1.default("[CURRENCY_ERROR]", error);
                }
                if (response.statusCode !== 200) {
                    reject(`${response.statusCode} ${response.statusMessage}`);
                    throw new Error_1.default("[CURRENCY_ERROR]", `${response.statusCode} ${response.statusMessage}`);
                }
                const $ = BaseConfig_1._client.scrape.load(data, this.cheerioOpt);
                const currency_from_1 = $("[class=\"vLqKYe\"]").text().trim();
                const currency = $("[class=\"DFlfde SwHCTb\"]").text().trim();
                const currency_ = $("[class=\"MWvIVe\"]").text().trim();
                if (currency == "" && currency_ == "" && currency_from_1 == "") {
                    reject("Failed to fetch currency because internal error.");
                    throw new Error_1.default("[CURRENCY_ERROR]", "Your keyword doesn't look like currency search keyword or Your IP was blocked by Google because many requests and suspicious activity.");
                }
                resolve(`Rate 1 ${currency_from_1} adalah ${currency} ${currency_}`);
            });
        });
    }
}
exports.default = CurrencyScrape;
