'use strict';
const ident = require('./src/ident');

module.exports.hello = async event => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless executed successfully!',
        input: event,
        ident: await ident.getIdent()
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
