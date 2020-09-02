//'use strict';
// const twilio = require('twilio');
// const CONFIG = require('./config');
//const jwt = require('jsonwebtoken');
//const express = require('express');
//const session = require('express-session');
//const app = express();
//const ambiente = require('./.env');

/**
 * Send messages to the google graph API.
 *
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {Object|Object[]} messageData - Payloads to send
 * @returns {undefined}
 */

 //app.use(session({secret: '1234'}));

/*var sess;
app.get('/',function(req,res){
    sess=req.session;
    sess.username; 
});*/

/*app.use(session({
    secret: '1234',
    // create new redis store.
    store: new redisStore({ host: 'localhost', port: 8000}),
    saveUninitialized: false,
    resave: false
}));*/


module.exports = (data) => {
	console.log("received message 1243", from, '\n', to, data);

	const resp = {
		//conversationToken: conversationToken,
		expectUserResponse: true
	  };	
	  if (true) {
		resp.expectedInputs = [
		  {
			inputPrompt: {
			  richInitialPrompt: data.richResponse //carga las respuestas
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
	  console.log('Response:');
	  console.log(resp);
	  return resp; 

	//return client.messages.create({from, body, to})
	
}

/*var auth = function(req, res, next) {
	if (req.session && req.session.user === resp && req.session.admin)
	  return next();
	else
	  return res.sendStatus(401);
  };*/
  
