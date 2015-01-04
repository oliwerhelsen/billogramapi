'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash');

/**
 * Extend Billogram module
 */
module.exports = _.extend(
	require('./lib/billogram.invoices'),
	require('./lib/billogram.customers'),
	require('./lib/billogram.items'),
	require('./lib/billogram.settings'),
	require('./lib/billogram.logotype')
);