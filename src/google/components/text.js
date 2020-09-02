/**
 * Format the response for Google Assistant.
 *
 * @param   {string}          text - The text you want to send.
 * @returns {Object}
 */
const textTemplate = (output) => (
  {
    // "s": output.substring(0, 59),
    "items": {
      "simpleResponse": {
        "textToSpeech": output
      }
    }
  }
)


module.exports = (messageText) => {
  return textTemplate(messageText);
}
