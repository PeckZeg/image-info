const imageInfo = require('../index');
const _ = require('lodash');
const path = require('path');

const TEST_FILES = [
    'jpg.jpg',
    'webp.webp',
    'animated-webp.webp'
];

_.each(TEST_FILES, (filename) => {
    imageInfo(path.join(__dirname, 'images', filename), (err, info) => {
        console.log(filename, '========================================');
        if (err) return console.warn(err);
        console.log(info);
    });
});