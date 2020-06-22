---
title: 'Genera tu X-ORIONX-SIGNATURE'
metaTitle: 'Syntax Highlighting is the meta title tag for this page'
metaDescription: 'This is the meta description for this page'
---

## General

X-ORIONX-SIGNATURE es un [header](https://developer.mozilla.org/es/docs/Web/HTTP/Headers) que debe tener un código [HMAC-SHA512](https://es.wikipedia.org/wiki/HMAC).

## Generación

Para generar la firma debemos juntar nuestro timestamp con el body de nuestra llamada, y generar un código HMAC-SHA512. Para hacerlo debemos utilizar esta formula, [RFC 2104](https://tools.ietf.org/html/rfc2104). Te recomiendamos crear una función donde centralices todas las llamadas a la API.

Para mayor información ver [HMAC Wikipedia](https://wikipedia.org/wiki/HMAC).

### Ejemplo de llamada

```js
timestamp = Date.now()

apiKey = 'your-api-key-code'

body = {
  query: `
    query getLastPrice($marketCode: ID!) {
      market(code: $marketCode) {
        lastTrade {
          price
        }
      }
    }
  `,
  variables: {
    'marketCode': 'CHACLP'
  }
}
body = stringify(body)

signature = HMAC-SHA512('apiSecretKey', timestamp + body)
request = {
  method: 'POST',
  headers: {
    X-ORIONX-TIMESTAMP: timestamp,
    X-ORIONX-APIKEY: apiKey,
    X-ORIONX-SIGNATURE: signature
  }
  body: body
}
// Enviar Request
sendRequest(request)
```

## Librerías

Existen distintas librerías que te pueden ayudar a generar tu request. Algunas de ellas son:

|  Lenguaje  | Librería |                    Link                     |
| :--------: | -------- | :-----------------------------------------: |
| Javascript | jsSHA    |     https://github.com/Caligatio/jsSHA      |
|  Python2   | hmac     | https://docs.python.org/2/library/hmac.html |
|  Python3   | hmac     | https://docs.python.org/3/library/hmac.html |
