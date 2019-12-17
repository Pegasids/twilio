const accountSid = '*';
const authToken = '*';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '*', to: '*'})
      .then(message => console.log(message.sid));
