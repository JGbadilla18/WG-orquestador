var sendText = require('./text');
var sendImage = require('./image');
var sendOption = require('./option');
var sendCarousel = require('./carousel');
var sendPause = require('./pause');
// var sendLocation = require('../mock/location');
var sendError = require('./error');
// var sendLoginButton = require('./loginButton');
var {singleButton} = require('./button');
var sendLink = require('./link');


/**
 * Many types of unstructured content can be sent with the Messenger Platform, including text, audio, images, video, and files.
 * There are also a number of pre-defined message templates available that allow you to send structured messages
 * for a richer experience.
 * 
 * Read More at: https://developers.facebook.com/docs/messenger-platform/send-api-reference/templates
 */

module.exports = {
    text: sendText,
    image: sendImage,
    option: sendOption,
    carousel: sendCarousel,
    pause: sendPause,
    suggestion: sendError,
    error: sendError,
    // SingIn: sendLoginButton,
    button: singleButton,
    link: sendLink,
}