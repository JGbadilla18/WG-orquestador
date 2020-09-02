const watsonServices = require('../services');


const verifySession = (session=undefined) => {
  if(session !== undefined) {
    return session;
  } 
  return watsonServices.getSession()
}

module.exports =  function request(text) {
  return new Promise((resolve, reject) => {
    const session = undefined;
    verifySession(session)
    .then((validSessionId) => {
      watsonServices.sendMessage(validSessionId.result.session_id, text, 'text')
      .then((response) => {
          return resolve(response);
          })
          .catch((err) => {
            console.error("err", err);
            return reject(err);
          })
        })
        .catch((err) => {
          console.error("err", err);
          return reject(err);
        })
    });
}
