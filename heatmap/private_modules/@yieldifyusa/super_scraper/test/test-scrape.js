import Super_Scraper from '../src/main.js';
yiel.super_scraper = new Super_Scraper();

const should = chai.should();
const expect = chai.expect;

describe('test', () => {
	it('should return true', () => {
		expect(1).equal(1);
	});
});

describe('scrape', () => {
	describe('image', () => {
		it('should scrape the src from an img tag', () => {
			let res = yiel.super_scraper.scrape.image('.product-image > img');
			expect(res).equal('http://dwmvwp56lzq5t.cloudfront.net/johnvu_files/super_scraper/product.jpg');
		});
		it('should scrape the background url from a div or span tag', () => {
			let res = yiel.super_scraper.scrape.image('#starRating');
			expect(res).equal('http://dwmvwp56lzq5t.cloudfront.net/johnvu_files/super_scraper/stars.jpg');
		});
	});

	describe('text', () => {
		it('should scrape the text from an element', () => {
			let res = yiel.super_scraper.scrape.text('#productName');
			expect(res).equal('Purple Blouse');
		});
		it('should scrape the value from a select field', () => {
			let res = yiel.super_scraper.scrape.text('#productQty');
			expect(res).equal('1');
		});
		it('should scrape the value from an input field', () => {
			let res = yiel.super_scraper.scrape.text('#hiddenInput');
			expect(res).equal('SaleItem');
		});
	});

	describe('link', () => {
		it('should scrape the href from an archor element', () => {
			let res = yiel.super_scraper.scrape.link('.breadcrumb a');
			expect(res).equal('womens.html');
		});
	});
	describe('cart', () => {
		it('should ajax the cart page and return a DOM object', (done) => {
			yiel.super_scraper.scrape.cart('cart.html')
				.then((dom) => {
					let res = dom;
					expect(res.length).gt(0);
					done();
				});
		});
		it('should return a DOM object that can be executed on with jQuery', (done) => {
			yiel.super_scraper.scrape.cart('cart.html')
				.then((dom) => {
					let res = yiel.super_scraper.scrape.text('#total', dom);
					expect(res).equal('$79.99');
					done();
				});
		});
	});
});