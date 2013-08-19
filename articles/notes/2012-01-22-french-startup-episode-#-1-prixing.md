# French Startup Episode #1: Prixing

##About Prixing
[Prixing](http://www.prixing.fr/) is a mobile price comparator based on your locale. Thanks to the camera on your mobile phone, it can read bar code of any products and so get lot of informations about this product, prices across local and internet markets, deals available, opinions of others consumers...

![Prixing app](http://www.prixing.fr/images/scan.png)

Prixing is built by [Eric Larchevêque](http://www.prixing.fr/pages/about).

##Review
Why I like Prixing?

 -  Easy and quick to scan bar code and to get informations about a product based on my locale.
 -  I can create and share shopping lists with my roommates and parents.
 -  I can manage all my loyalty cards with my phone.

##Some code
![API Prixing](http://www.prixing.fr/images/ami_api.png)

I discovered Prixing because I was looking for an API to quickly find product informations thanks to bar code for a school project. And I think you guess that's what Pricing offers, so based on the [API offers by Prixing](http://www.prixing.fr/api), I created a node.js client for it. The client is available on [github](https://github.com/lbdremy/prixing-node-client).

<iframe src="http://ghbtns.com/github-btn.html?user=lbdremy&amp;repo=prixing-node-client&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110px" height="20px"></iframe><iframe src="http://ghbtns.com/github-btn.html?user=lbdremy&amp;repo=prixing-node-client&amp;type=fork&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="110px" height="20px"></iframe>

The client is really easy and straightforward like the API exposed by Prixing.
First install the client:

```bash
npm install prixing-client
```

Now let's use the client:

```javascript
// Dependencies
var prixing = require('prixing-client');

// Create a Client
var apikey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx' // Put your own apikey
var client = prixing.createClient(apikey);

// Get a product using its EAN (bar code)
var ean = '3017624044003' //NUTELLA stuff
client.getProduct(ean, function (err, data) {
    if (err) {
        console.log('ERROR: ' + err);
    } else {
        console.log('INFOS: ' + JSON.stringify(data));
    }
});
```

I used awesome modules named [vows](http://vowsjs.org/) and [nock](https://github.com/pgte/nock) to test this tiny client just for fun and I will talk about them in my next post. So stay tuned!