'use strict';
const handleMessage = require('./handleMessage');
const connector = require('../connector');
/**
 * Handles messaging_postbacks events
 * Postbacks occur when a postback button, Get Started button, or persistent menu item is tapped.
 * Read More at: https://developers.facebook.com/docs/messenger-platform/reference/webhook-events/messaging_postbacks
 * 
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {Object}          received_postback - The payload from the request 
 * @returns {Array[String]}
 */
module.exports = (sender_psid, received_postback) => {
  // Get the payload for the postback
  let payload = JSON.parse(received_postback.payload);  
  // Send the message to acknowledge the postback to watson
  if(typeof(payload.input.text) == 'string') {
    handleMessage(sender_psid, payload.input)
  } 
}