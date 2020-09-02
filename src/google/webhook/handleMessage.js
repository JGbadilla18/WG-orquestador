'use strict';
// const callSendAPI = require('../api')
const connector = require('../connector');
let lastResponse = false;
let postback = false;
let timeout = undefined;
let postback_list = [];
const jwt = require('jsonwebtoken');

/**
 * Handles messages events
 * This callback will occur when a message has been sent to your Page. Messages are always sent in order. 
 * You may receive text messages or messages with attachments.
 * Read More at: https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messages
 *
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {Object}          received_message - The payload from the request 
 * @returns {Array[String]}
 */
module.exports = (message) => {
  // Check if the message contains text
  const received_message = message.inputs[0].rawInputs[0].query
  // console.log('postback', postback, )  
  if(postback && postback_list.length > 0 && parseInt(received_message) >= 0) {
    // Create the payload for a basic text message
    return new Promise((resolve, reject) => {
    if(received_message >= 0 && received_message < postback_list.length) {
      return connector.getGoogleTemplate(postback_list[received_message])
      // Data Batch (A set of messages to send to facebook)
      .then((dataBatch) => {//databatch captura los datos y sigue el flujo
        postback = false
        //console.log('Question:')
          const data = dataBatch[0]
          const richResponse = {
            items: [
              dataBatch.map(x => x.items)
            ],
            suggestions: []
          };
          // const conversationToken = jwt.sign('12345', 'nosecret');
          const resp = {
            // conversationToken: conversationToken,
            expectUserResponse: true
            };          
            if (true) {
            resp.expectedInputs = [
              {
              inputPrompt: {
                richInitialPrompt: richResponse
              },
              possibleIntents: [
                {
                intent: 'actions.intent.TEXT'
                }
              ]
              }
            ];
            } else {
            resp.finalResponse = { speechResponse: { textToSpeech: data.s } };
            }
            if(data.response_type == 'postback') {
              postback = true;
              postback_list = data.value
            }          
            console.log('Response:');
            console.log(resp);
            return resolve(resp); 
      })
      .catch((err) => {
        const status = err.code !== undefined && err.code > 0 ? err.code : 500;
        return ({code: status, description: err});
      })
    }
  }) 
  }  
  else if (received_message) {    
    console.log('User Answer:', received_message)
    // Create the payload for a basic text message
    return new Promise((resolve, reject) => {
      connector.getGoogleTemplate(received_message)
      // Data Batch (A set of messages to send to GA)
      .then((dataBatch) => {
        console.log('Question:', dataBatch[0].items)
        const data = dataBatch[0]
        const resp = {
          expectUserResponse: true
          };          
          const richResponse = {
            items: [
              dataBatch.map(x => x.items)
            ],
            suggestions: []
          };   

          if (true) {
          resp.expectedInputs = [
            {
            inputPrompt: {
              richInitialPrompt: richResponse
            },
            possibleIntents: [
              {
              intent: 'actions.intent.TEXT'
              }
            ]
            }
          ];

          } else {
          resp.finalResponse = { speechResponse: { textToSpeech: data.s } };
          }
          if(data.response_type == 'postback') {
            postback = true;
            postback_list = data.value
          }        
          console.log('Response:');
          console.log(resp);
          return resolve(resp); 
    })
    .catch((err) => {
      const status = err.code !== undefined && err.code > 0 ? err.code : 500;
      return reject({code: status, description: err});
    })
  })
}
}