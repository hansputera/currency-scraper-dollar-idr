import cheerio from "cheerio";
import request from "request";

const config = {
    baseURL: "https://google.co.id",
    keyword: "dollar to idr today"
};

const _client = {
    scrape: cheerio,
    req: request
};

export interface CurrencyOptions {
    userAgent?: string;
    keyword?: string;
}

export {
    config,
    _client
};