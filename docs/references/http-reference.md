---
title: Http specification reference
---

:::note
- This page should be use as reference for http specification files.
- This page is subject to change. It is requested to check this page frequently.
:::

The Http specification format is how anyone express a Http request. Following is the full reference to write Http specification file.

Http specification document is a versioned document, meaning there MUST be a `version:` key on the document. 

> [TBD] It's also an exposable document meaning, you can expose local variables to whatever other spec. document it's called from.

### Reference as example

```yaml
request:
  # valid URL
  url: https://httpbin.org/get

  # for query string or url parameters
  url_params:
    one: 1
    two: true

  # http method to use
  method: GET # or POST, PUT, PATCH, DELETE, OPTIONS, HEAD

  # send requst headers
  # add any numbers of headers
  # Causion: some values or keys need to be wrapped with single (') or double (") quote
  headers:
    User-Agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    'Accept-Encoding': 'gzip, deflate'
    accept: '*/*'

  # ==== send authentication header ====
  # two supported type: auth[bearer], auth[basic]

  # auth[bearer] example
  auth[bearer]:
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

  # auth[basic] example
  auth[basic]:
    username: Some_USER
    password: 'Some-P@$$W03D'

  # ==== send request body with the request ====
  # There are 5 supported type: body[form], body[form-data], body[json], body[xml], body[text]

  # to send application/x-www-form-urlencoded form enctype
  body[form]:
    'var 1': 'var str 1'
    var-2: 'var str 2'
    # note: this will just pass filepath as value
    var_3: file:///home/username/.vimrc

  # to upload file as part of body use multipart/form-data like
  body[form-data]:
    'var 1': 'var str 1'
    var-2: 'var str 2'
    # note this will actually upload a file
    # we use file protocol (file://) scheme to identify a file
    var_3: file:///home/username/.vimrc
    var4: file:///home/username/Documents/CID-25601.IpPhone.rtf

  # to send plain text
  body[text]: 'Plain text here'

  # to pass as json to body pass a yaml object like
  body[json]: {
    user_id: 32, 
    roll_no: 1, 
    class: 2, 
    name: 'Student name' 
  }

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

  # returns given part of the response after
  # the request have been executed and got response
  #
  # supported values: 'version', 'code', 'reason', 'headers', 'body'
  # if not available, or set as null, returns all parts of response
  return: ~ 
```

---
### `version` (<small>_`required`_</small>)

`version` is a top-level block that defines a document version. How to write a `version:` block, is [already defined here](/references/version-reference).

### `variables`

`variables` is a top-level block that defines local variables. These variables are file scoped. How to write a `variables:` block, is [already defined here](/references/variable-reference).

### `request` (<small>_`required`_</small>)

`request` is a `_required_` block that defines a http request. It's also a returnable block, meaning it have some scoped variables (namely `return:` sub-block) those represents several sub-part of response received afterward. See [`return:`](#requestreturn) for details.

```yaml
request:
  ...
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
  url_params:
    sort_by: 'projects'
    sort_order: 'DESC'
```

### `request.headers`

`request.headers` is a sub-block, that is used to define a set of request headers. It only supports key value data, where both key and value should be scaler values.

```yaml
request:
  headers:
      User-Agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
      Accept-Encoding: 'gzip, deflate'
      Accept: '*/*'
```

### `request.auth[basic]`

`request.auth[basic]` is a sub-block, that is used to send basic authentication informations with the request. It's to be used for [basic authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme). It only supports key value data, where both key and value should be scaler values. only `username` and `password` is supported. Adding any other value to it is expected to be fruitless.

> If a document already have `request.auth[bearer]` defined along with this block, `chk` will behave unexpectedly.

```yaml
request:
  auth[basic]:
    username: admin
    password: 'test1234' # NEVER use this
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
    'var 1': 'var str 1'
    var-2: 'var str 2'
    var_3: file:///home/username/.vimrc # note: this will just pass filepath as value
```

### `request.body[form-data]`

`request.body[form-data]` is a sub-block, that is used to submit a multipart html form. More accurately send `multipart/form-data` form `enctype`. It only supports key value data, where both key and value should be scaler values. Request will submit multipart form data while using `request.body[form-data]`, therefore can be used to upload binary content or file.

You can override `Content-Type` headers if you want, however that will override `Content-Type: multipart/form-data` header which is automatically set.

Note, that you can upload files in this way. Please follow [this section on wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme#Examples) on `file://` to set path on different OS platform.

```yaml
request:
  body[form-data]:
    'var 1': 1
    var-2: 'var str 2'
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
      name: 'Student name'
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

### `request.return`

`request.return` is a sub-block. It's actually not a part of `request` block, meaning it don't define any request parameter unlike others mentioned above. Rather, this block is used to mention what data to return after the response have been received.

Supported values: 

- `.version`
- `.code`
- `.reason`
- `.headers`
- `.body`

If not available, or set as null, returns all parts of response.

```yaml
request:
  return: ~
```
