---
title: Workflow specification reference
---

:::note

- This page should be use as reference for http specification files.
- This page is subject to change. It is requested to check this page frequently.

:::

The **Http specification format** is how anyone express a Http request. Following is the full reference to write Http specification file.

Http specification document is a _**versioned document**_, meaning there MUST be a `version:` key on the document.

It's also an _**exposable document**_ meaning you can expose local data using `expose:` key in the document. More on this in [variable spec. reference](/docs/references/variable-reference)

### All supported nodes in http specification document

```yaml
# Version of the document
version: "default:http:X.X.X"

# Define HTTP request with this node
request:
  # valid URL
  url: https://httpbin.org/get

  # To be used for query string or url parameters
  # above URL becomes https://httpbin.org/get?one=1&two=true
  url_params:
    one: 1
    two: true

  # Http method to use
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
  - "{$_response}"
```

---

### `version` (<small>_`required`_</small>)

`version` is a top-level block that defines a document version. How to write a `version:` block is already defined in [_version reference_](/docs/references/version-reference).

### `variables`

`variables` is a top-level block that defines local variables. These variables are file scoped. How to write a `variables:` block is already defined in [_variable-reference_](/docs/references/variable-reference).

One special local variable named `_response` get added after the response received successfully. This local variable is accessible under [_exposable block_](/docs/references/variable-reference#exposable).

### `request` (<small>_`required`_</small>)

`request` is a `_required_` block that defines a http request. This holds many other nodes that constructs an http request.

```yaml
request: ...
```

### `request.url` (<small>_`required`_</small>)

`request.url` is a `_required_` sub-block, that is used to define a valid `http://` or `https://` for now.

```yaml
request:
  url: https://httpbin.org/get
```

### `request.method` (<small>_`required`_</small>)

`request.method` is a `_required_` sub-block, that is used to define a valid [HTTP request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods). Acceptable values are `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`, `HEAD`.

```yaml
request:
  method: OPTIONS
```

### `request.url_params`

`request.url_params` is a sub-block, that is used to define a set of url parameters or query string. It only supports key value data, where key should be scaler values.

```yaml
request:
  url: https://httpbin.org/get
  url_params:
    sort_by: "projects"
    sort_order: "DESC"

  # https://httpbin.org/get?sort_by=projects&sort_order=DESC
```

### `request.headers`

`request.headers` is a sub-block, that is used to define a set of request headers. It only supports key value data, where both key and value should be scaler values.

```yaml
request:
  headers:
    User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
    Accept-Encoding: "gzip, deflate"
    Accept: "*/*"
```

### `request.auth[basic]`

`request.auth[basic]` is a sub-block, that is used to send basic authentication informations with the request. It's to be used for [basic authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme). It only supports key value data, where both key and value should be scaler values. only `username` and `password` is supported. Adding any other value to it is expected to be fruitless.

> If a document already have `request.auth[bearer]` defined along with this block, `chk` will behave unexpectedly.

```yaml
request:
  auth[basic]:
    username: admin
    password: "test1234"
```

This is same as writing following

```yaml
request:
  headers:
    Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

### `request.auth[bearer]`

`request.auth[bearer]` is a sub-block, that is used to send a bearer token with the request. It's to be used for [bearer authentication](https://dev.writer.com/docs/authentication). It only supports key value data, where both key and value should be scaler values. only `token` is supported. Adding any other value to it is expected to be fruitless.

> If a document already have `request.auth[basic]` defined along with this block, `chk` will behave unexpectedly.

```yaml
request:
  auth[bearer]:
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

### `request.body[form]`

`request.body[form]` is a sub-block, that is used to submit a html form. More accurately send `application/x-www-form-urlencoded` form `enctype`. It only supports key value data, where both key and value should be scaler values. Request will only submit scaler form data while using `request.body[form]`.

You can override `Content-Type` headers if you want, however that will override `Content-Type: application/x-www-form-urlencoded` header which is automatically set.

```yaml
request:
  body[form]:
    "var 1": "var str 1"
    var-2: "var str 2"
    var_3: file:///home/username/.vimrc # note: this will just pass filepath as value
```

### `request.body[form-data]`

`request.body[form-data]` is a sub-block, that is used to submit a multipart html form. More accurately send `multipart/form-data` form `enctype`. It only supports key value data, where both key and value should be scaler values. Request will submit multipart form data while using `request.body[form-data]`, therefore can be used to upload binary content or file.

You can override `Content-Type` headers if you want, however that will override `Content-Type: multipart/form-data` header which is automatically set.

Note, that you can upload files in this way. Please follow [this section on wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme#Examples) on `file://` to set path on different OS platform.

```yaml
request:
  body[form-data]:
    "var 1": 1
    var-2: "var str 2"
    var_3: file:///home/username/.vimrc
    var4: file:///home/username/Documents/CID-25601.IpPhone.rtf
```

### `request.body[text]`

`request.body[text]` is a sub-block, that is used to submit a plain text form. More accurately send `text/plain` form `enctype`. It only supports string. Multiple line of string is also supported.

```yaml
request:
  body[text]: Some plain text here
```

or can set multiline text. i.e:

```yaml
request:
  body[text]: |
    Some plain text here
    Other line here
```

### `request.body[json]`

`request.body[json]` is a sub-block, that is used to submit a raw json data with the request. This automatically sets `Content-Type: application/json` request header. It supports key value data, where key should be scaler, and value can be of object type those are convertible to json.

```yaml
request:
  body[json]:
    user_id: 32
    roll_no: 1
    person:
      class: 2
      name: "Student name"
```

### `request.body[xml]`

`request.body[xml]` is a sub-block, that is used to submit a raw xml data with the request. This automatically sets `Content-Type: application/xml` request header. It only supports string data. However, you can use variables to write dynamic data to XML.

```yaml
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

### `expose`

`expose` is a sub-block, that can be used to expose local variable of this file to outer scope.

For http specification document local variable called `_response` which holds successful response, is available.

See docs on [expose node](/docs/references/variable-reference#expose-node)
