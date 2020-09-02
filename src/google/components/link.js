
/**
 * Template hyperlink to send to Facebook graph API.
 *
 * @param   {string}          text - The title to complete auth
 * @returns {Object}
 */
module.exports = (payload) => ({
    response_type: "text",
    body: `*${payload.title}* \n${paylodar.url}`
})
