/// <reference types="cheerio" />
import { CurrencyOptions } from "./BaseConfig";
export default class CurrencyScrape {
    opt?: CurrencyOptions | undefined;
    cheerioOpt?: cheerio.CheerioParserOptions | undefined;
    private url;
    private options;
    constructor(opt?: CurrencyOptions | undefined, cheerioOpt?: cheerio.CheerioParserOptions | undefined);
    got(): Promise<unknown>;
}
