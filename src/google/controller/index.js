const { messageService } = require('../services');

// // // Send message to whatsapp
// exports.sendMessage = (req, res) => {
//   console.log(req.req);
//   messageService.sendMessage(req.body.From, req.body.To, req.body.Body)
//   res.sendStatus('204');
// }

// // Send message to whatsapp
exports.sendMessage = (req, res) => {
  const request = req.body;
  messageService.sendMessage(request).then((googleAnswer) => {
    res.json(googleAnswer);
  })
}

exports.echoMessage = (req, res) => {
  res.send('Watson for Google Assistant app is running.')
}
