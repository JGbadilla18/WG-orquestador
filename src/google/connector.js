const watsonServices = require('../watson/services');
const userService = require('../services/userService');
const components = require('./components');
const { response } = require('express');
const { init } = require('../models/userModel');
let sessionIdWatson = '';
//const conectado = false;
//const recordarSesion = String;

/*const uuid = require('node-uuid');
const httpContext = require('express-http-context');*/


/**
 * Map the result from Watson Assistant to Google Assistant .
 *
 * @param   {String}          response - Watson json response
 * @returns {Object}
 */
const getResultByType = (result) => {
  const type = ({
    image: result.source,
    text: result.text,
    option: ({title:result.title, options:result.options}),
    carousel: result,
    pause: result,
    suggestios: result,
    error: result,
    carousel: result.elements,
    SingIn: result.text,
    SingOut: ({title:result.title, options:result.options}),
    PassThread: result,
    button: result,
    link: result,
  })
  return type[result.response_type];
}

/**
 * Send messages to the Whatsapp API.
 *
 * @param   {String}          sender_psid - Specific user id to send data to
 * @param   {Object|Object[]} message - Payloads to send
 * @returns {undefined}
 */

 //---------------------------------------------------envio y respuesta de mensajes--------------------------
exports.getGoogleTemplate = (message) => {
    // const message = req.inputs[0].rawInputs[0].query
    // console.log("message: ", message)
    return new Promise((resolve, reject) => { 
        if (sessionIdWatson == '') { //new session for any time reset the assistant
          watsonServices.getSession()        
          .then((watsonobject) => {            
            sessionIdWatson = watsonobject.result.session_id;
            console.log("pruebas" , watsonobject.result.session_id)        
            watsonServices.sendMessage(watsonobject.result.session_id, message, 'text')           
            .then((response) => {
              if (response && response.components && response.components.length > 0) {
                responses = response.components.map(component => (components[component.response_type](getResultByType(component))))
                console.log(responses)
                return resolve(responses)
              }
            }).catch(error => {
              console.error("err", error);              
              if(error.description.message === 'invalited session') {
                updateUser(user).then(updateUser =>{
                  watsonServices.sendMessage(watsonobject.result.session_id, message, 'text')
                  .then((response) => {
                    if(response && response.components && response.components.length >= 0){
                      responses = response.components.map(component => (components[component.response_type](getResultByType(component))))
                      return resolve(responses)
                    }                
                  }).catch(error => {
                    console.error("invalited session", error);
                    return reject(error);
                  }) 
                })
              }
              return reject(error);
            })
  
        }).catch(error => {
          console.error("invalited session", error);
          return reject(error);
        }) 
        } else {          
          watsonServices.sendMessage(sessionIdWatson, message, 'text')           
            .then((response) => {
              console.log('PruebaidW',sessionIdWatson, message)
              if(response && response.components && response.components.length > 0) {
                responses = response.components.map(component => (components[component.response_type](getResultByType(component))))
                //console.log("AQUI Responses", responses)
                return resolve(responses)
              }
            }).catch(error => {
              console.error("err", error);
              if(error.description.message === 'invalited session'){
                updateUser(user).then(updateUser =>{                  
                  watsonServices.sendMessage(sessionIdWatson, message, 'text')
                  .then((response) => {
                    if(response && response.components && response.components.length >= 0){
                      responses = response.components.map(component => (components[component.response_type](getResultByType(component))))
                      return resolve(responses)
                    }                
                  }).catch(error => {
                    console.error("invalited session", error);
                    return reject(error);
                  }) 
                })
              }
              return reject(error);
            })
        }             
  })
}
//----------------------------------------------------------------------------------------------------------

/*var app = express();
app.use(exports);

// Run the context for each request. Assign a unique identifier to each request
app.use(function(req, res, next) {
    httpContext.set('reqId', uuid.v1());
    next();
});*/

 

/*exports.getGoogleTemplate_Nuser = (message) => {   
    return new Promise((res, req) =>{
      if(sessionIdWatson == ''){
        watsonServices.sendMessage(watsonobject.result.session_id, message, 'text')
        .then((watsonobject) => {   
          /*if(response && response.end && response.components.length >= 0){
            responses = response.components.map(component => (components[component.response_type](getResultByType(component))))
            return resolve(responses)
          }                
        }).catch(error => {
          console.error("invalited session", error);
          return reject(error);
        })
      }
    })
  }
*/

//conv.intent.param[sessionIdWatson].original;
//conv.intent.param[sessionIdWatson].resolved;
