const html = require('pa11y-reporter-html');
const pa11y = require('pa11y');
const testHelpers = require('../testHelpers');

splash();
// Async function required for us to use await
async function splash() {
	try {
		// Test http://example.com/
		const result = await pa11y(`http://${process.env.SITE}/photography`, {
			// Log what's happening to the console
			log: {
				debug: console.log,
				error: console.error,
				info: console.log,
			},
			standard: 'WCAG2AAA',
			defaults: {
				timeout: 50000,
				wait: 5000,
			},
			includeNotices: true,
			includeWarnings: true,
			level: 'error',
			actions: [
				'wait for element .filter-item to be visible',
				`screen capture ./screenshots/${process.env.SITE}-Photography.png`,
			],
		});
		const htmlResults = await html.results(result);
		testHelpers.writeReportToHTML(htmlResults, `${process.env.SITE} photography Report`);
	} catch (error) {
		// Output an error if it occurred
		console.error(error.message);
	}
}
