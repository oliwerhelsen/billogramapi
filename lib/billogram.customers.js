'use strict';

/**
 * Module dependencies.
 */

var rest = require('restler');

var Customer = function(api_user, api_password) {
	this.baseUri = 'https://sandbox.billogram.com/api/v2'; //This is for sandboxing
	var authString = api_user + ':' + api_password;
	var base64Token = btoa(authString);
	this.token = base64Token;
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

Customer.prototype.addCustomer = function(callback) {
	var customerData = {
	    "customer_no": 10032,
	    "name": "Peter Jonsson",
	    "company_type": "individual",
	    "org_no": "",
	    "contact": {
	        "name": "Peter Jonsson",
	        "email": "peter.jonsson@example.com"
	    },
	    "address": {
	        "street_address": "Lavendelväg 27",
	        "zipcode": "12345",
	        "city": "Stadby",
	        "country": "SE"
	    }
	}

	makeRequest(
		rest.post, this.uri + '/customer', 
		{
			data: customerData, 
			headers: {
				'Content-Type': 'application/json',
				'Authorization' : 'Basic' + this.token
			}
		}, 
		callback
	);
};

exports.Customer = Customer;