'use strict';

/**
 * Module dependencies.
 */

var rest = require('restler');

var Customers = function(api_user, api_password) {
	this.baseUri = 'https://sandbox.billogram.com/api/v2/customer'; //This is for sandboxing
	var authString = api_user + ':' + api_password;
	var base64Token = new Buffer(authString).toString('base64');
	this.token = base64Token;
}

function makeRequestJson(fn, uri, data, options, callback) {
	fn(uri, data, options)
    	.on('complete', function (result) {
	        if (result instanceof Error) {
	            callback(result);
	        } else {
	            callback(null, result);
	        }
	    });
}

function makeRequest(fn, uri, options, callback) {
	fn(uri, options)
    	.on('complete', function (result) {
	        if (result instanceof Error) {
	            callback(result);
	        } else {
	            callback(null, result);
	        }
	    });
}

Customers.prototype.addCustomer = function(customerData, callback) {
	makeRequestJson(
		rest.postJson, this.baseUri, customerData,
		{
			headers: {
				'Authorization' : 'Basic ' + this.token
			}
		}, 
		callback
	);
};

exports.Customers = Customers;