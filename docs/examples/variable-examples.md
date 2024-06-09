---
title: Variable examples
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.

:::

:::note

Case-wise more example can be found in [https://github.com/chkware/cli](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_config/pass_cases/variables) repository

:::

[Variable specification document reference](/docs/references/variable-reference)

We can also use variables inside a http and testcase specification file. See examples below.

### Request with query string using variables

```yaml
---
version: default:http:0.7.2

# define local variables
variables:
  Foo: "bar"
  Two: 2
  Server: https://example.org/api

request:
  # put variables on the path for query string
  url: "{$Server}/path?foo={$Foo}&two={$Two}"
  method: GET
```

### Request with basic authentication header using variables

```yaml
---
version: default:http:0.7.2

# define local variables
variables:
  userName: Some_USER
  password: Some-P@$$W03D
  content_type: application/json
  Server: https://example.org/api

request:
  url: "{$Server}/resource/id"
  method: GET

  headers:
    Accept-Encoding: gzip, deflate
    Content-Type: "{$content_type}"

  auth[basic]:
    username: "{$userName}"
    password: "{$password}"
```

### Testcase using variables

```yaml
---
version: "default:testcase:0.7.2"

variables:
  Name: "Morpheus"
  Job: "leader"
  Server: https://reqres.in/api/v1

request:
  url: "{$Server}/users"
  method: POST
  body[json]: { "name": "{$Name}", "job": "{$Job}" }

spec:
  execute:
    file: ~

  asserts:
    - { type: AssertEqual, actual: "{$_response.code}", expected: 201 }
    - { type: AssertIsMap, actual: "{$_response.body}" }
```
