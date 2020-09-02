const {mongoHelper} = require('./mongoHelper.js')
const {watsonHelper} = require('./watsonHelper.js')

/** Helpers
 * 
 * Wrapper functions for microservices calls
 * 
 */
module.exports = {
    mongoHelper,
    watsonHelper
}