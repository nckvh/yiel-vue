import Super_Scraper from '../super_scraper.js';

Super_Scraper.prototype.scrape = Super_Scraper.prototype.scrape || {};
var scrape_text = Super_Scraper.prototype.scrape.text = (selector, dom) => {

	var element = !!dom ? yiel.$(selector, dom) : yiel.$(selector);
	if (element.prop('tagName') === 'INPUT' || element.prop('tagName') === 'SELECT') {
		var value = element.val();
		return value.length > 0 ? value : null;
	} else {
		var text = element.text();
			text = text.trim();
		if (text.length > 0) {
			return text;
		} else {
			return null;
		}	
	}	

}

export default scrape_text;