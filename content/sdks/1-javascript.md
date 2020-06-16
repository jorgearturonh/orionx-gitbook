---
title: 'Javascript'
metaTitle: 'Syntax Highlighting is the meta title tag for this page'
metaDescription: 'This is the meta description for this page'
---

## Usage

First you need to install it via npm.

```
npm install orionx-sdk --save
```

Then you will need to get your credentials, follow [this tutorial](http://docs.orionx.com/docs/getStarted.html)

After that we are ready to go

## Code example

```js
// App.js
import Orionx from 'orionx-sdk'

Orionx.setCredentials({
  apiKey: '<apiKey>',
  secretKey: '<secretKey>',
  apiUriL '<https://apiUri.com/graphql>'
})

// And then use this in any Component.js
Orionx.market({code: 'LTCBTC'})
      .then(function(market) {
        console.log(market)
      })
      .catch(function(err) {
        console.log(err)
      })
```

## Methods

### createPayment

The `createPayment()` creates a new payment and returns its data.

```js
await Orionx.createPayment({
  acceptedCurrenciesCodes: ['LTC', 'BTC'],
  amount: 1000,
  description: 'Testing...',
  mainCurrencyCode: 'CLP',
  title: 'Test',
});
```

#### Params

**acceptedCurrenciesCodes:** The coin codes that the buyer will be able to use as payment

**amount** The price in mainCurrencyCode units

**description** Some descriptive text

**mainCurrencyCode** The coin that you will recieve

**title** Some descriptive title

---

### me

The `me()` method returns yours user data.

```js
await Orionx.me();
```

---

### market

The `market()` method returns the info of a specified market.

```js
await Orionx.market({ code: ':marketCode' });
```

#### Params

**code:** Market code

---

### markets

The `markets()` method returns the info of all the markets.

```js
await Orionx.markets();
```

---

## Docs

For further information about, visit our [Docs](http://docs.orionx.com/docs/getStarted/)

## Opening Issues

If you encounter a bug with the Orionx SDK for JavaScript we would like to hear about it. Search the [existing issues](https://github.com/orionx-dev/orionx-sdk-js/issues) and try to make sure your problem doesn’t already exist before opening a new issue. It’s helpful if you include the version of the SDK, Node.js and OS you’re using.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/orionx-dev/orionx-sdk-js/blob/master/LICENSE.md) file for details
