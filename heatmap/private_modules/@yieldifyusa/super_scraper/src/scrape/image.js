import Super_Scraper from '../super_scraper.js';

Super_Scraper.prototype.scrape = Super_Scraper.prototype.scrape || {};
var scrape_image = Super_Scraper.prototype.scrape.image = (element) => {

	var element = yiel.$(element);
	var imageSrc,
		backgroundProp,
		backgroundUrl,
		regex;
	if (element.prop('tagName') === 'IMG') {
		imageSrc = element.attr('src');
		return imageSrc;
	} else if (element.prop('tagName') === 'DIV' || element.prop('tagName') === 'SPAN') {
		backgroundProp = element.css('background');
		// if that doesn't work...
		backgroundProp = backgroundProp === '' || backgroundProp === undefined ? element.css('background-image') : backgroundProp;
		// if that doesn't work...
		backgroundProp = backgroundProp === '' || backgroundProp === undefined ? element.style.background : backgroundProp;
		// if that doesn't work...
		backgroundProp = backgroundProp === '' || backgroundProp === undefined ? element.style.backgroundImage : backgroundProp;
		regex = /url\((?:\'|\")?(.+)(?:\'|\")?\)/g.exec(backgroundProp);
		if (regex !== null) {
			return regex[1];
		} else {
			return null;
		}
	} else {
		return null;
	}

};
export default scrape_image;