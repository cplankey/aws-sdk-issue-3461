const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
const connect = new AWS.Connect();
//flow exported via connect UI
const exportedFlow = require('./exportedFlow.json');
//flow content provided by using describe contact flow API
const describedFlow = require('./describeResponseFlow.json');

const doesntWork = function(){
    var params = {
        Content: JSON.stringify(exportedFlow), /* required */
        InstanceId: 'INSTANCE ID', /* required */
        Name: 'API FLOW', /* required */
        Type: 'CONTACT_FLOW', /* required */
        Description: 'STRING_VALUE'
      };
      connect.createContactFlow(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
}
doesntWork();
const works = function(){
    var params = {
        Content: JSON.stringify(describedFlow), /* required */
        InstanceId: 'INSTANCE ID', /* required */
        Name: 'API FLOW', /* required */
        Type: 'CONTACT_FLOW', /* required */
        Description: 'STRING_VALUE'
      };
      connect.createContactFlow(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
}
works();