"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._client = exports.config = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const request_1 = __importDefault(require("request"));
const config = {
    baseURL: "https://google.co.id",
    keyword: "dollar to idr today"
};
exports.config = config;
const _client = {
    scrape: cheerio_1.default,
    req: request_1.default
};
exports._client = _client;
