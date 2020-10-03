export default class CurrencyError extends Error {
    name: string;
    constructor(name: string, message?: string);
}
