'use strict';
require('dotenv').config({silent: true});
const request = require('request');

/**
 * GOOGLE MAPS API FUNCTION
 *
 * @param   {String}          query - Text to search in google api
 * @returns {Array}
 */
module.exports = (query) => {
    return new Promise( (resolve, reject) => {
        request({
            uri: "https://maps.googleapis.com/maps/api/place/textsearch/json",
            qs: { key: process.env.GOOGLE_API_KEY, region: 'gt', type: 'finance', query: query },
            method: 'POST',
          }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var body = JSON.parse(body);
              resolve(body.results)
            } else {
              resolve(error)
            }
          });
    })
}