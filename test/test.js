#!/usr/bin/env nodeunit

var btc = require('../src/btc-ticker.js');

btc.forEach(function(exch){
	// Each exchange is a test group. Add to exports
	var group = exports[exch.name] = {};
	// Loop thru api routes
	for(route in exch.api){
		// Add test function for route
		group[route] = function(test){
			exch.api[route](function(err, data){
				test.ifError(err);
				test.done();
			});
		}
	}
});
