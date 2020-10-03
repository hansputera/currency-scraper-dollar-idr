/// <reference types="cheerio" />
import request from "request";
declare const config: {
    baseURL: string;
    keyword: string;
};
declare const _client: {
    scrape: cheerio.CheerioAPI;
    req: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
};
export interface CurrencyOptions {
    userAgent?: string;
    keyword?: string;
}
export { config, _client };
