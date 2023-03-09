---
title: Http examples
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.
  :::

:::note
Case-wise more example can be found in [https://github.com/chkware/cli](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_config) repository
:::

[Http specification document reference](/references/http-reference)

Following examples are using HTTP _GET_ and _POST_ method. Although all these example are still valid for _POST_, _PUT_, _PATCH_, _DELETE_, _OPTIONS_, _HEAD_ method as well. You can still send a request body with _GET_ or _HEAD_ method for the sake of testing API.

### Minimal request with HTTP GET method

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
version: default:http:0.7.2
request:
  # put variables on the path for query string
  url: https://example.org/api/path?foo=bar&two=2
  method: GET
```

or you can also do like:

```yaml
---
version: default:http:0.7.2
request:
  url: https://example.org/api/path
  method: GET

  # put variables as url_params entry for query string
  url_params:
    foo: bar
    two: 2

  # get only response code
expose:
  - "{$_response.code}"
```

### Request with query string and header

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/action
  method: GET

  url_params:
    foo: bar
    two: 2

  headers:
    User-Agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
    Accept-Encoding: gzip, deflate
```

### Request with basic authentication header

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/id
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[basic]:
    username: Some_USER
    password: "Some-P@$$W03D"
```

`username` and `password` will be automatically transformed to secret string as per [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) scheme.

### Request with bearer authentication header

```yaml
---
version: default:http:0.7.2

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
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c
```

### Request with JSON body

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: application/json

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[json]: { user_id: 32, roll_no: 1, class: 2, name: "Student name" }

# get every thing out of response received
# not writing the following statement also does similar behavior
expose: ~
```

### Request with form

Following example will submit a form with POST method. You do not need to set any special header for this.

You can override `Content-Type` headers if you want, however that will override `Content-Type: application/x-www-form-urlencoded` header which is automatically set.

Note, that you can not upload files in this way. See **Request with file upload** section for that purpose.

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[form]:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: "Student name"

    # note: this will just set photo with file path as string,
    # but will not upload the actual file
    photo: file:///home/username/student-photo-01.png

# get only response body; response headers, code, etc will be dropped
expose:
  - "{$_response.body}"
```

### Request with file upload

Following example will submit a form with binary image data in POST method. You do not need to set any special header for this.

You can override `Content-Type` headers if you want, however that will override `Content-Type: multipart/form-data` header which is automatically set.

Note, that you can upload files in this way. Please follow [this section on wikipedia](https://en.wikipedia.org/wiki/File_URI_scheme#Examples) on `file://` to set path on different OS platform.

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/id
  method: PUT

  headers:
    Accept-Encoding: gzip, deflate

  auth[bearer]:
    token: eyJhbGciOiJIU...4fwpMeJf36POk6yJV_adQssw5c

  body[form-data]:
    user_id: 32,
    roll_no: 1,
    class: 2,
    name: "Student name"

    # note: this will actually upload the file
    photo: file:///home/username/student-photo-01.png
    cover_photo: file:///home/username/student-cvphoto-01.png
```

### Request with XML in body

Following example will POST a plain xml content.

You can override `Content-Type` headers if you want, however that will override ``Content-Type: application/xml` header which is automatically set.

```yaml
---
version: default:http:0.7.2

request:
  url: https://example.org/api/resource/action
  method: POST

  headers:
    Accept-Encoding: gzip, deflate

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
