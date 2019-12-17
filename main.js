const accountSid = 'AC8677fd075050fb6280d336ea4979c519';
const authToken = '830af61976d96a9c23b1eb5b881683d5';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+13369398905', to: '+17788619922'})
      .then(message => console.log(message.sid));