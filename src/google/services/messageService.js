const {handleMessage, handlePostback, handleSomethingElse} = require('../webhook');

/**
 * Validation token with whatsapp.
 *
 * @param   {Object}           input - Text for whatsapp
 * @returns {String}
 */
exports.sendMessage = (send_message) => {
  return handleMessage(send_message);        
  // return ({code: (200), data: ('EVENT_RECEIVED')})
};

exports.getWebhook = (body) => {
  if (body.object === 'page') {
    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {
      // Iterate over each messaging event

      if(entry && entry.standby) {
        entry.standby.map(element => {
          console.log("sender", element.sender)
          console.log("recipient", element.recipient)
          console.log("message", element.message)
        })
      }

      if(entry && entry.messaging && entry.messaging[0]) { 
      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      //antes de agregar solo estaba esto-------------------------
       // Handle Message Webhook
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
        //return ({code: (200), data: ('EVENT_RECEIVED')})
      }
      //----------------------------------------------------------

      //postback-------------------------------------------------------------------------------------
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message && webhook_event.message.quick_reply) {
        handlePostback(sender_psid, webhook_event.message.quick_reply);
        return ({code: (200), data: ('POSTBACK_RECEIVED')})
      }
      
      // Handle Postback Webhook
      else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
        return ({code: (200), data: ('POSTBACK_RECEIVED')})
      } 
      //postback--------------------------------------------------------------------------------------
      
      // Handle Any other webhook
      else if(webhook_event){
        return ({code: 403, err: `Webhook received unknown event: ${webhook_event}`});
      }
      
      // Handle error in case of none webhook
      else {
        return ({code: 403, err: `Webhook did not received event: ${body.Object}`});
      }
    }
    });
  };
};