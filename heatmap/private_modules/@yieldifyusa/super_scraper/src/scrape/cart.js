import Super_Scraper from '../super_scraper.js';

Super_Scraper.prototype.scrape = Super_Scraper.prototype.scrape || {};
var scrape_cart = Super_Scraper.prototype.scrape.cart = (url) => {

	return new Promise((resolve, reject) => {
		var dom;
		var ajax = yiel.$.get(url)
		.then((data) => {
			dom = typeof data === "string" ? yiel.$.parseHTML(data) : null;
			if (!!dom) {
				resolve(dom);
			} else {
				reject(new Error("Scrape Cart: data null"));
			}
		})
		.catch((err) => {
			console.log("Scrape Cart: " + err);
		});
	});

};
export default scrape_cart;