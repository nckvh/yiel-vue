import Super_Scraper from '../super_scraper.js';

Super_Scraper.prototype.scrape = Super_Scraper.prototype.scrape || {};
var scrape_link = Super_Scraper.prototype.scrape.link = (element) => {

	var element = yiel.$(element);
	if (element.prop('tagName') === 'A') {
		var href = element.attr('href');
		return !!href && href.length > 0 ? href : null;
	} else {
		return null;	
	}
	
};
export default scrape_link;