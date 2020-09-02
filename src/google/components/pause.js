/**
 * Template Image to send to Whatsapp Twilio API.
 *
 * @param   {string}          payload - The time in ms to wait.
 * @returns {Object}
 */
module.exports = (payload) => ({response_type: 'text', time: payload.time, body:`${payload.text ? payload.text : "Si necesitas algo más dime tu consulta"}`})