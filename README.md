node-btc-ticker
===============

Simple wrapper for ticker queries to a few common bitcoin exchanges.
Currently only supports USD.


Supported Exchanges
===================
* MtGox
* BTC-e
* Bitfinex
* Bitstamp
* CampBX
* Coinbase


Market Object
=============
```
{
  name: 'GOX',
  base: 'http://data.mtgox.com/api/1/',
  timeout: 10000,
  api: { ticker: [Function] }
}
```
Example Usage
=============
```
var markets = require('btc-ticker');

// List known markets
markets.forEach(function(m){ console.log(m.name) })
/*  
    CNBS
    BTCe
    GOX
    ...
*/

markets.CNBS.api.ticker(function(err, data){
  // Raw ticker data from market's api
}); 
```

Testing
========
`nodeunit test/test.js`
