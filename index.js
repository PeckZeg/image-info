const animatedWebpInfo = require('animated-webp-info');
const imageType = require('image-type');
const sizeOf = require('image-size');
const crypto = require('crypto');
const async = require('async');
const _ = require('lodash');
const fs = require('fs');

module.exports = (filepath, cb) => {
    var tasks = [];

    //  Convert To Buffer
    tasks.push((cb) => {
        fs.readFile(filepath, (err, buffer) => {
            cb(err, filepath, buffer);
        });
    });

    //  Buffer Sha-1 & Bytes
    tasks.push((filePath, fileBuffer, cb) => {
        var sha1 = crypto.createHash('sha1').update(fileBuffer).digest('hex'),
            fileInfo = { sha1: sha1, bytes: fileBuffer.length };

        cb(null, filePath, fileBuffer, fileInfo);
    });

    //  Generate Image Type
    tasks.push((filePath, fileBuffer, fileInfo, cb) => {
        _.extend(fileInfo, imageType(fileBuffer));
        cb(null, filePath, fileBuffer, fileInfo);
    });

    //  Generate Width & Height
    tasks.push((filePath, fileBuffer, fileInfo, cb) => {
        var dimensions;

        try {
            cb(null, _.extend(fileInfo, sizeOf(fileBuffer)));
        }

        catch (ex) {
            animatedWebpInfo(filePath, (err, webpInfo) => {
                if (err) return cb(err);
                cb(null, _.extend(fileInfo, _.extend(fileInfo, webpInfo)));
            });
        }
    });

    //  Run Tasks
    async.waterfall(tasks, cb);
};