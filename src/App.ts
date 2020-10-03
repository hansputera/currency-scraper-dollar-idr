import request from "request";
import {
    _client,
    config, CurrencyOptions
} from "./BaseConfig";
import CurrencyError from "./utils/Error";

interface optionsReq {
    url: string,
    headers: {
        "user-agent": string
    }
}

export default class CurrencyScrape {
    private url = `${config.baseURL}/search?q=${encodeURIComponent(this.opt!.keyword || config.keyword)}`;
    private options: optionsReq = {
        url: this.url,
        headers: {
            "user-agent": this.opt!.userAgent || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
        }
    };
    constructor(public opt?: CurrencyOptions, public cheerioOpt?: cheerio.CheerioParserOptions) {}
    public async got() {
        return new Promise((resolve, reject) => {
        _client.req(this.options, (error, response: request.Response, data: Buffer | string) => {
            if (error) {
                reject(error);
                throw new CurrencyError("[CURRENCY_ERROR]", error);
            }
            if (response.statusCode !== 200) {
                reject(`${response.statusCode} ${response.statusMessage}`);
                throw new CurrencyError("[CURRENCY_ERROR]", `${response.statusCode} ${response.statusMessage}`);
            }

            const $ = _client.scrape.load(data, this.cheerioOpt);

            const currency_from_1 = $("[class=\"vLqKYe\"]").text().trim();
            const currency = $("[class=\"DFlfde SwHCTb\"]").text().trim();
            const currency_ = $("[class=\"MWvIVe\"]").text().trim();
            if (currency == "" && currency_ == "" && currency_from_1 == "") {
                reject("Failed to fetch currency because internal error.");
                throw new CurrencyError("[CURRENCY_ERROR]", "Your keyword doesn't look like currency search keyword or Your IP was blocked by Google because many requests and suspicious activity.");
            }
           resolve(`Rate 1 ${currency_from_1} adalah ${currency} ${currency_}`);
        });
    });
    }
}