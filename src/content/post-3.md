---
title: 'Code Example'
date: '2019-06-06'
draft: true
path: '/blog/code-example'
---

## An Code example with PrismJS

This blog uses the Atom Editor Theme.

```js
console.log('Hello World')
```

## Default NodeJS server

```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
```

---

> This is a quote

---

[Example.com](example.com)

---

`const foo = bar`

```javascript
const foo = bar
console.log(foo)
```

---

| Hello |  World |
| ----- | ------ |
| Foo   | Bar    |
