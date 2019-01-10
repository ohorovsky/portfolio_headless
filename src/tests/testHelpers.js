const fs = require('fs');

module.exports = {
	writeReportToHTML: function writeReportToHTML(htmlText, fileName) {
		if (!fs.existsSync('reports/')) {
			fs.mkdirSync('reports/');
		}

		fs.writeFile(`reports/${fileName}.html`, htmlText, err => {
			if (err) {
				return console.log(err);
			}

			console.log(`Results added to reports/${fileName}.html`);
		});
	},
};
