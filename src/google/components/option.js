const Button = require('./button');

/**
 * Template Options postback to send to Google Assistant API.
 *
 * @param   {Object}          payload - The structure with all the props for the option
 * @returns {Object}
 */
module.exports = (payload) => ({
    "response_type": 'postback',
    "value": payload.options.map(option => option.value.input.text),
    // "s": `${payload.title}\n\n${payload.options.map((option, index) => Button["text"]({title: option.label, index}))}`.substring(0, 59),
    // "richResponse": {
    "items":
        {
            "simpleResponse": {
                "textToSpeech": `${payload.title}\n\n${payload.options.map((option, index) => Button["text"]({title: option.label, index}))}`
            }
        },
    // ],
    // "suggestions": []
    
})
