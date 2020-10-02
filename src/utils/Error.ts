export default class CurrencyError extends Error {
    constructor(public name: string, message?: string) {
        super(message);
    }
}