import cheerio from "cheerio";
import request from "request";

const config = {
    baseURL: "https://google.com",
    keyword: "dollar to idr today"
};

const _client = {
    scrape: cheerio,
    req: request
};

export interface CurrencyOptions {
    userAgent?: string,
}

export {
    config,
    _client
};