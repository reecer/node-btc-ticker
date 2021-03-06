var request = require('request');


var Coinbase = new Market('https://coinbase.com/api/v1/', {
	ticker: 'prices/sell'
}, 'CNBS');

var BTCe = new Market('https://btc-e.com/api/3/', {
	ticker: 'ticker/btc_usd'
}, 'BTCe');

var MtGox = new Market('http://data.mtgox.com/api/1/', {
	ticker: 'BTCUSD/ticker'
}, 'GOX');

var Bitstamp = new Market('https://www.bitstamp.net/api/', {
	ticker: 'ticker'
}, 'BSTP');

var Bitfinex = new Market('https://api.bitfinex.com/v1/', {
	ticker: 'ticker/btcusd' 
}, 'BTFX');

var CampBX = new Market('http://campbx.com/api/', {
	ticker: 'xticker.php'
}, 'CPBX');

var exchanges = [
	Coinbase, 
	BTCe,
	MtGox,
	Bitstamp,
	Bitfinex,
	CampBX
];


exchanges.forEach(function(ex){
	module.exports[ex.name] = ex;
});
module.exports.forEach = Array.prototype.forEach.bind(exchanges);
module.exports.length = exchanges.length;

function Market(baseUrl, routes, name){
	this.name = name || '';
	this.base = baseUrl;
	this.api = {};
	this.timeout = 10000;

	for(var r in routes)
		this.api[r] = apiCall.bind(this, r);

	function apiCall(r, callback){
		if(r in routes){
			var url = this.base + routes[r];
			var opts = {
				uri: this.base + routes[r],
				timeout: this.timeout
			};
			request(url, function(err, resp, body){
				if(err) callback(err, null);
				else callback(null, JSON.parse(body));
			});
		}
	}
}
