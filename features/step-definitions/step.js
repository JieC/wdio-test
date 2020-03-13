const {Given} = require('cucumber');

Given('I throw an error', () => {
  throw new Error('test');
})
