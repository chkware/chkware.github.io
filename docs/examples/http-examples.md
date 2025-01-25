---
title: HTTP examples
---

:::note

Following YAML specs are working examples. This page should be use as reference for _HTTP_ specification file. See [HTTP specification document reference](/docs/references/http-spec) here.

This page is **SUBJECT TO CHANGE**. It is requested to check this page frequently.

These examples can be found [in here](https://github.com/chkware/chkware.github.io/tree/main/sample_specs/examples).

We are using [DummyJSON](https://dummyjson.com/docs) and https://httpbin.org/. :clap: Thanks for their awesome services.

:::

### Minimal request with HTTP GET method

```yml
---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/test
  method: GET

expose:
  - <% _response %>
```

### Minimal request with query string

```yml
---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/products?limit=10&skip=5
  method: GET

expose:
  - <% _response %>
```

or it can be also written like,

```yml
---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/products
  url_params:
    limit: 10
    skip: 5
  method: GET

expose:
  - <% _response %>
```

### Request with query string and header

```yml
---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/products

  url_params:
    limit: 10

  method: GET

  headers:
    User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
    Accept-Encoding: gzip, deflate

expose:
  - <% _response %>
```

### Request with basic authentication header

```yml
---
version: default:http:0.7.2

request:
  url: https://httpbin.org/basic-auth/user/passwd123
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Accept: application/json
    Content-Type: application/json

  auth[basic]:
    username: user
    password: passwd123

expose:
  - <% _response %>
```

`username` and `password` will be automatically transformed to secret string as per [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) scheme.

### Request with bearer authentication header

<details>

  <summary>Get the bearer token</summary>

  ```yml
  ---
  version: default:http:0.7.2

  request:
    url: https://dummyjson.com/auth/login
    method: "POST"

    headers:
      Accept-Encoding: gzip, deflate
      Content-Type: application/json

    body[json]:
      username: emilys
      password: emilyspass
      expiresInMins: 30

  expose:
    - <% _response %>
  ```

</details>

```yml
---
version: default:http:0.7.2

request:
  url: "https://dummyjson.com/auth/me"
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: [PUT-YOUR-TOKEN]

expose:
  - <% _response %>
```

### Request without a body

```yml
---
version: default:http:0.7.2

request:
  url: "https://dummyjson.com/users/add"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

expose:
  - <% _response %>
```

### Request with JSON body

```yml
---
version: default:http:0.7.2

request:
  url: "https://dummyjson.com/users/add"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[json]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,

expose:
  - <% _response %>
```

### Request with form

```yml
---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[form]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,

expose:
  - <% _response %>
```

You can override `Content-Type` headers if you want, however that will override `Content-Type: application/x-www-form-urlencoded` header which is automatically set.

### Request with file upload

```yml
---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[form-data]:
    firstName: "Some"
    lastName: "O' Name"
    age: 51,
    cover_photo: file:///path/to/file/cover-iamge.png
    profile_photo: file:///path/to/file/profile-iamge.png

expose:
  - <% _response %>
```

Follow [this section on wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme#Examples) on `file://` to set path on different OS platform.

You can override `Content-Type` headers if you want, however that will override `Content-Type: multipart/form-data` header which is automatically set.

### Request with XML in body

```yml
---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  body[xml]: <?xml version="1.0"?><catalog><book id="bk101"><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000-10-01</publish_date><description>An in-depth look at creating applications  with XML.</description></book></catalog>

expose:
  - <% _response %>
```

You can override `Content-Type` headers if you want, however that will override `Content-Type: application/xml` header which is automatically set.

### Request with text in body

```yml
---
version: default:http:0.7.2

request:
  url: "https://httpbin.org/post"
  method: POST

  body[text]: "Request from CHKware"

expose:
  - <% _response %>
```

You can override `Content-Type` headers if you want, however that will override `Content-Type: application/xml` header which is automatically set.
