# Currency Scraping

Currency American Dollar to IDR written in TypeScript.

I make it for fetch real currency from [google](https://google.co.id).

# Setup

- Install NodeJS and TypeScript
- Config the API cooldown in `config.json` write in milisecond ( default: 30 sec )
- Run the project use `node ./dist`
- Done, open `http://localhost:8080/` in your browser.

# Dependencies
- [request](https://npmjs.com/package/request)
- [cheerio](https://npmjs.com/package/cheerio)
- [express](https://npmjs.com/package/express) (Rest API)