BillogramAPI
=======

[![NPM](https://nodei.co/npm/billogramapi.png?downloads=true&stars=true)](https://nodei.co/npm/billogramapi/)

(C) Oliwer Helsén (oliwer.helsen@live.com) 2015

A wrapper for Billogram API


Installing
----------

```
npm install billogramapi
npm install billogramapi --save
```

Features
--------

-- DROPLETS
* Create customer
* Fetch single customer
* List customers
* Update customer

API
---

```
API-USER = Get this from the settings under your profile
API-PASSWORD = Get this from the settings under your profile
isSandbox = Defiend if this is a sandbox or a production call

var billogram = new BILLOGRAMAPI(API-USER, API-PASSWORD, isSandbox);
```
### addCustomer(customerData, callback)

Create customer

Example usage
-------------

```javascript
var BILLOGRAMAPI = require('billogramapi').Customers;

var billogram = new BILLOGRAMAPI(API-USER, API-PASSWORD, true);

var customerData = {
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

billogram.addCustomer(customerData, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getCustomerById(customerID, callback)

Fetch single customer

Example usage
-------------

```javascript
var BILLOGRAMAPI = require('billogramapi').Customers;

var billogram = new BILLOGRAMAPI(API-USER, API-PASSWORD, true);

var customerID = 1234;

billogram.getCustomerById(customerID, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### getCustomers(callback)

List customers

Example usage
-------------

```javascript
var BILLOGRAMAPI = require('billogramapi').Customers;

var billogram = new BILLOGRAMAPI(API-USER, API-PASSWORD, true);

billogram.getCustomers(function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

### updateCustomer(customerID, callback)

Fetch single customer

Example usage
-------------

```javascript
var BILLOGRAMAPI = require('billogramapi').Customers;

var billogram = new BILLOGRAMAPI(API-USER, API-PASSWORD, true);

var customerID = 1234;

billogram.updateCustomer(customerID, function (error, result) {
          if (error) {
              console.log(error);
          }
          else {
              console.log(result);
          }
      });

```

TODO
----
* Keep on adding more actions from the Billograms API
