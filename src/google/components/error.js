/**
 * Template error to send to WhasApp Twilio graph API.
 *
 * @param   None
 * @returns {Object}
 */
module.exports = (payload) => ({response_type: 'text', body:"Disculpa no pude entender su mensaje"})