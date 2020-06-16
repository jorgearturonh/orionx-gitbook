---
title: 'Comienza con la API'
metaTitle: 'Comienza con la API de Orionx'
metaDescription: 'This is the meta description'
---

A continuación se detallan una serie de pasos para realizar una conexión nuestra API.
Nuestra API esta construida con [GraphQL](https://graphql.org/), por lo que para comunicarse esperamos consultas GraphQL.

## Crear una cuenta en Orionx

Lo primero que debemos hacer es registrarnos en Orionx, ingresando a [orionx/register](https://orionx.com/register).

## Crear API keys

El siguiente paso es crear nuestro primer par de API keys, ingresamos a [orionx/developers](https://orionx.com/developers/keys), le damos crear y tendremos nuestro primer par de API keys llamado "Personal Api Key". Por último configuramos que permisos tendra ese par de llaves.

![api keys image](/docs/assets/api-keys-created.png)

En la imagen solo tenemos permisos de trade pero podemos darle los que queramos.

## Generar llamadas

Las consultas que nosotros esperamos consisten en queries en formato JSON usando métodos POST a una URL con ciertos headers que cumplan con algunos requisitos.

### 1. Endpoint

Las llamadas deben ir dirigidas a esta URL: https://api2.orionx.io/graphql

### 2. Headers

Estos son los headers que tienen que venir en la llamada.

| Header             |                 Description                  |
| ------------------ | :------------------------------------------: |
| X-ORIONX-TIMESTAMP | Fecha actual en la que se realiza la llamada |
| X-ORIONX-APIKEY    |     Llave creada en tu perfil de Orionx      |
| X-ORIONX-SIGNATURE |        código HMAC-SHA512 como texto         |

Ejemplo:

```js
headers: {
  'X-ORIONX-TIMESTAMP': '1535722187.333',
  'X-ORIONX-APIKEY': '8P1sn5m4GmS3sSK7xMWzXzGD9Qs4dSqjcje',
  'X-ORIONX-SIGNATURE': '42a35370d23147cb2d91de455909b2d91de455909.....'
}
```

Para generar tu firma te recomendamos revisar si puedes usar alguno de nustros [SDKs]() o bien, puedes hacerlo tu mismo.
Para más información sobre como [como generar tu X-ORIONX-SIGNATURE header](/docs/generateSignature.html)

### 3. Body

Body consiste en el cuerpo de la llamada, es un objeto que se compone de dos partes, query y variables.6

Ejemplo:

```js
body = {
  query: `
    query getMarket($marketCode: ID!) {
      market(code: $marketCode) {
        lastTrade {
          price
        }
      }
    }
  `,
  variables: {
    marketCode: 'CHACLP',
  },
};
```
