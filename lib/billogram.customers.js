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

/*
	Create customer

	- This call creates a new customer object and returns the created object.

	Params: Customerobject [object], Callback [function]

	Api-documentation: https://billogram.com/api/documentation#customers_create
*/
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

/*
	Fetch single customer

	- This fetches all data about a single customer. The command is sent to the customer object.

	Params: customerID [number], Callback [function]

	Api-documentation: https://billogram.com/api/documentation#customers_fetch
*/

Customers.prototype.getCustomerById = function(customerID, callback) {
	makeRequest(
		rest.get, this.baseUri + '/' + customerID,
		{
			headers: {
				'Authorization' : 'Basic ' + this.token
			}
		}, 
		callback
	);
};

/*
	List customers

	- This fetches many customer objects

	TODO: Add search functionallity
*/

Customers.prototype.getCustomers = function(callback) {
	makeRequest(
		rest.get, this.baseUri + '?page=1&page_size=100',
		{
			headers: {
				'Authorization' : 'Basic ' + this.token
			}
		}, 
		callback
	);
};

/*
	Update customer

	- This command changes an existing customer. The command is sent to the customer object to modify. 
	  This does not affect the customer data on any billograms or invoices sent to the customer, 
	  if the information needs to be updated on any existing billograms those must be updated individually afterwards.

	- Partial customer object, containing just the fields to update.
	  If the regional_sweden, contact, address or delivery_address fields are left out
	  or set to null (instead of containing the structures) those sub-objects are left unchanged.
	  Other fields that have default values will be set to their default value if they are specified as null in the passed structure.

	  Api-documentation: https://billogram.com/api/documentation#customers_edit
*/

Customers.prototype.updateCustomer = function(customerData, callback) {
	makeRequestJson(
		rest.putJson, this.baseUri, customerData,
		{
			headers: {
				'Authorization' : 'Basic ' + this.token
			}
		}, 
		callback
	);
};

exports.Customers = Customers;