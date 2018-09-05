const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
	throw Error('A file to watch must be specified!');
}

function onFileChanged(filename) {
	console.log(`File ${filename} changed!`);
}

fs.watch(filename, onFileChanged(filename));

console.log(`Now watching ${filename} for changes`);