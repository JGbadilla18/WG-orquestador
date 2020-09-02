/**
 * Template URL Buttons to send to Whatsapp Twilio API.
 *
 * @param   {String}          title - The placeholder for the button
 * @param   {string}          url - The redirected url
 * @returns {Object}
 */
const urlButton = ({title, url}) => (
    `\n\n${title} ⬇️ \n${url}`
)

/**
 * Template Postback Buttons to send to Whatsapp Twilio API.
 *
 * @param   {String}          title - The placeholder for the button
 * @param   {string}          payload - The payload for the postback
 * @returns {Object}
 */
const postbackButton = ({title, payload}) => ({
    type: "postback",
    payload,
    title,
})

/**
 * Template Quick Reply Buttons attached to the template to send to Whatsapp Twilio API.
 *
 * @param   {String}          title - The placeholder for the button
 * @param   {string}          url - The payload for the quickreply
 * @returns {Object}
 */
const renderButton = ({title, index}) => (
    `\n${index}-${title}`
    // content_type: "text",
    // title: title,
    // payload: JSON.stringify(payload),
)

const renderSingleButton = (payload) => (
    {
        response_type: 'text',
        body: `${payload.text} ${payload.buttonType === 'postback' ? payload.buttons.map(postbackButton) : payload.buttons.map(urlButton)}`
    }
)

module.exports = {
    text: renderButton,
    web_url: urlButton,
    postback: postbackButton,
    singleButton: renderSingleButton,
}
