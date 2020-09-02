'use strict';
const handleMessage = require('./handleMessage');
//const connector = require('../connector');
const callSendAPI = require('../api')

/*const router = express.Router();
const eventEmitter = require('./eventEmitter');
const listener = require('./eventListener');*/


/**
 * Something Else message. 
 * This function send a message after the last message to tell the user if want
 * another query with a pause defined by watson assistant.
 *
 * @param   {String}          lastResponse - boolean set true if is the last response
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {Object}          received_message - The payload from the request 
 * @returns {Array[String]}
 */
const somethingElse = (lastResponse, to, from = undefined, data = undefined) => {
  if(lastResponse) {
    timeout = setTimeout(() => {
      lastResponse = true
      return callSendAPI(from, to, data);
    }, data.time);
  } else {
    clearTimeout(timeout)
  }
}
const processSomething = callback => {
  setTimeout(callback, 20000);
}

//------------------------------------Reinicio de bot-------------------------------------------
/*router.post("./webhook", (req, res, next) => {
  processSomething(() => {
    const webhookUrl = req.params.url;

  });

  res.status(200).send('OK')
});*/
