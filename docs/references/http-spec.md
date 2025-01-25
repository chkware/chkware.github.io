---
title: HTTP specification
---

The **HTTP specification format** represents a HTTP request. One *HTTP specification document* can define one HTTP request.

HTTP specification document supports `default:http:0.7.2` version.

<details>
  <summary>All supported nodes in HTTP specification document</summary>

  ```yml
  # Version of the document
  version: "default:http:X.X.X"

  # Define variables
  variables:
    AVariable: Variable Value

  # Define HTTP request with this node
  request:
    # valid URL
    url: https://httpbin.org/get

    # To be used for query string or url parameters
    # above URL becomes https://httpbin.org/get?one=1&two=true
    #
    # Any YAML data type is supported.
    url_params:
      one: 1
      two: true

    # HTTP method to use
    method: GET # or POST, PUT, PATCH, DELETE, OPTIONS, HEAD

    # Send request headers, add any numbers of headers
    # Caution: some values or keys need to be wrapped with single (') or double (") quote
    # Please use quotation marks substitution
    headers:
      User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
      "Accept-Encoding": "gzip, deflate"
      accept: "*/*"

    # ==== Send authentication header ====
    # two supported type: auth[bearer], auth[basic]

    # auth[bearer] example
    # Send a bearer token this way
    auth[bearer]:
      token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

    # auth[basic] example
    auth[basic]:
      username: Some_USER
      password: "Some-P@$$W03D"

    # ==== Send request body with the request ====
    # There are 5 supported form type:
    #
    # body[form] -> Send encoded form body with the request
    # body[form-data] -> Send multipart body with the request
    # body[json] -> Send JSON body with the request
    # body[xml] -> Send XML body with the request
    # body[text] -> Send plain text body with the request

    # to send application/x-www-form-urlencoded form enctype
    body[form]:
      "var 1": "var str 1"
      var-2: "var str 2"
      # note: this will just pass filepath as value
      var_3: file:///home/username/.vimrc

    # to upload file as part of body use multipart/form-data like
    body[form-data]:
      "var 1": "var str 1"
      var-2: "var str 2"
      # note this will actually upload a file
      # we use file protocol (file://) scheme to identify a file
      var_3: file:///home/username/.vimrc
      var4: file:///home/username/Documents/CID-25601.IpPhone.rtf

    # to send plain text
    body[text]: "Plain text here"

    # to pass as json to body pass a yaml object like
    body[json]: { user_id: 32, roll_no: 1, class: 2, name: "Student name" }

    # to pass a xml as body use a yaml literal block
    body[xml]: |
      <?xml version="1.0"?>
      <catalog>
        <book id="bk101">
            <author>Gambardella, Matthew</author>
            <title>XML Developer's Guide</title>
            <genre>Computer</genre>
            <price>44.95</price>
            <publish_date>2000-10-01</publish_date>
            <description>An in-depth look at creating applications 
            with XML.</description>
        </book>
        <book id="bk102">
            <author>Ralls, Kim</author>
            <title>Midnight Rain</title>
            <genre>Fantasy</genre>
            <price>5.95</price>
            <publish_date>2000-12-16</publish_date>
            <description>A former architect battles corporate zombies, 
            an evil sorceress, and her own childhood to become queen 
            of the world.</description>
        </book>
      </catalog>

  expose:
    - <% _response %>
  ```
</details>

## `version` (<small>*`required`*</small>)

This is a top-level block that defines the document version. Read details of [_version reference_](/docs/references/version) here.

## `variables`

`variables` is a top-level block that defines local variables. These variables are not accessible outside of this file scope.

Read details of [*variables*](/docs/references/variables) here.

<!-- One special local variable named `_response` get added after the response received successfully. This local variable is accessible under [_exposable block_](/docs/references/variables#exposable). -->

## `request` (<small>*`required`*</small>)

`request` is a required block that defines a http request. This holds many other child nodes that constructs an http request.

### `request.url` (<small>*`required`*</small>)

`request.url` is a required child node to define a valid `http://` or `https://`.

```yml
request:
  url: https://httpbin.org/get
```

### `request.method` (<small>*`required`*</small>)

`request.method` is a required child node to define a valid [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). All defined methods are `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, `HEAD`. It is also possible to use any custom method server recognizes.

```yml
request:
  method: OPTIONS
```

### `request.url_params`

`request.url_params` is a child node to define a set of url parameters or query string. It only supports YAML maps, where both keys and values scaler values.

E.g. the following block represents `https://httpbin.org/get?sort_by=projects&sort_order=DESC` URL.

```yml
request:
  url: https://httpbin.org/get
  url_params:
    sort_by: "projects"
    sort_order: "DESC"
```

### `request.headers`

`request.headers` is a child node to define a set of request headers. It only supports YAML maps, where both keys and values scaler values.

```yml
request:
  headers:
    User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
    Accept-Encoding: "gzip, deflate"
    Accept: "*/*"
```

### `request.auth[basic]`

`request.auth[basic]` is a child node to send [basic authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) information with the request. 

Here only `username` and `password` is supported. Adding any other value to it is expected to be fruitless.

```yml
request:
  auth[basic]:
    username: admin
    password: "test1234"
```

:::note
Document having `request.auth[bearer]` defined already along with this block will behave unexpectedly.
:::
:::info
This is same as writing following

```yml
request:
  headers:
    Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```
:::

### `request.auth[bearer]`

`request.auth[bearer]` is a child node to send a [bearer authentication](https://dev.writer.com/docs/authentication) token with the request.

Here only `token` is supported. Adding any other value to it is expected to be fruitless.

```yml
request:
  auth[bearer]:
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

:::note
Document having `request.auth[basic]` defined already along with this block will behave unexpectedly.
:::
:::info
This is same as writing following

```yml
request:
  headers:
    Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```
:::

### `request.body[form]`

`request.body[form]` is a child node to submit a plain html form. This adds `application/x-www-form-urlencoded` form `enctype` in request header.

It only supports key value data, where both key and value should be scaler values. Request will only submit scaler form data while using `request.body[form]`.

:::info
You can override `Content-Type` headers if you want, however that will override `Content-Type: application/x-www-form-urlencoded` header which is automatically set.

Given a path to a file will not upload the file.
:::

```yml
request:
  body[form]:
    "var 1": "var str 1"
    var-2: "var str 2"
    var_3: file:///home/username/.vimrc
```

### `request.body[form-data]`

`request.body[form-data]` is a child node to submit a multipart html form. This adds `multipart/form-data` form `enctype` in request header.

It only supports key value data, where both key and value should be scaler values. Request will submit multipart form data while using `request.body[form-data]`.

:::info
You can override `Content-Type` headers if you want, however that will override `Content-Type: multipart/form-data` header which is automatically set.

Given a path to a file will upload the file. Note, that you can upload files in this way. Please follow [this section on wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme#Examples) on `file://` to set path on different OS platform.
:::

```yml
request:
  body[form-data]:
    "var 1": 1
    var-2: "var str 2"
    var_3: file:///home/username/.vimrc
    var4: file:///home/username/Documents/CID-25601.IpPhone.rtf
```

### `request.body[text]`

`request.body[text]` is a child node to submit a plain text. This adds `text/plain` form `enctype`in request header. 

It only supports string. Multiple line of string is also supported.

```yml
request:
  body[text]: Some plain text here
```

or can set multiline text. i.e:

```yml
request:
  body[text]: |
    Some plain text here
    Other line here
```

### `request.body[json]`

`request.body[json]` is a child node to submit a raw json data with the request. This adds `Content-Type: application/json` in the request header.

It supports key value data, where key should be scaler, and value can be of YAML collection type those are convertible to json.

```yml
request:
  body[json]:
    user_id: 32
    roll_no: 1
    person:
      class: 2
      name: "Student name"
```

### `request.body[xml]`

`request.body[xml]` is a child node to submit a raw xml data with the request. This adds `Content-Type: application/xml` in the request header.

It only supports string data.

```yml
request:
  body[xml]: |
    <?xml version="1.0"?>
    <catalog>
      <book id="bk101">
          <author>Gambardella, Matthew</author>
          <title>XML Developer's Guide</title>
          <genre>Computer</genre>
          <price>44.95</price>
          <publish_date>2000-10-01</publish_date>
          <description>An in-depth look at creating applications 
          with XML.</description>
      </book>
      ...
    </catalog>
```

## `expose`

`expose` is a top level node for [exposable variable](./variables-exposable.md) for this spec. to caller scope.

HTTP specification document exposes `_response` that contains successful response. `_response` has following nodes:

- `_response.code` holds response status code. e.g. 200, 400, 401, etc
- `_response.headers` holds response headers.
- `_response.body` holds response body.
- `_response.reason` holds response reason. e.g. 'Created', 'Moved Permanently', etc [more here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- `_response.version` holds response HTTP version. e.g. 'HTTP/1.1'
