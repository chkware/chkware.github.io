---
title: Http spec. examples
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.

:::

Case-wise more example can be found in `tests/resources/storage/sample_config` directory of https://github.com/chkware/cli repository

Following are the examples with HTTP GET method. Although all these example are still valid for POST, PUT, PATCH, DELETE, OPTIONS, HEAD method as well.

### Minimal request

```yaml
---
version: default:http:0.7.2
request:
  url: https://example.org/api/path
  method: GET
```

### Request with query string

```yaml
---
# put variables on the path
request:
  url: https://example.org/api/path?foo=bar&two=2
  method: GET
```

or you can also do like:

```yaml
---
# put variables as url_params entry
request:
  url: https://example.org/api/path
  method: GET
  url_params:
    foo: bar
    two: 2
```

### Request with query string and header

```yaml
---
request:
  url: https://example.org/api/resource/action
  method: GET

  url_params:
    foo: bar
    two: 2

  headers:
    User-Agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    Accept-Encoding: gzip, deflate
```

### Request with basic authentication header

```yaml
---
request:
  url: https://example.org/api/resource/id
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[basic]:
    username: Some_USER
    password: 'Some-P@$$W03D'
```

`username` and `password` will be automatically transformed to secret string as per [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) scheme.

### Request with bearer authentication header

```yaml
---
request:
  url: https://example.org/api/resource/id
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c
```

### Request without a body

```yaml
---
request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[none]: ~
```

### Request with JSON body

```yaml
---
request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[json]: { user_id: 32, roll_no: 1, class: 2, name: 'Student name' }
```

### Request with form

Following example will submit a plain html form POST with encoding type `application/x-www-form-urlencoded`

```yaml
---
request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[form]:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: 'Student name'
    photo: file:///home/username/student-photo-01.png # note: this will just pass filepath as string, not the actual file
```

### Request with file upload

Following example will submit a plain html form POST with encoding type `multipart/form-data`

```yaml
---
request:
  url: https://example.org/api/resource/id
  method: PUT

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[form-data]:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: 'Student name'
    photo: file:///home/username/student-photo-01.png # note: this will actually upload the file
    cover_photo: file:///home/username/student-cvphoto-01.png
```

### Request with XML in body

Following example will submit a plain html form POST with encoding type `multipart/form-data`

```yaml
---
request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/xml

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
    </catalog>
```
