---
title: Testcase examples
---

:::note
- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.
:::

:::note
Case-wise more example can be found in [https://github.com/chkware/cli](https://github.com/chkware/cli/blob/main/tests/resources/storage/sample_config/bitcoin-usd-testcase.chk) repository
:::

## Testcase examples:

Testcase is an experimental feature, in _`PRE_ALPHA`_ stage.


### Testcase with in-file request

```yaml
---
version: 'default:testcase:0.7.2'

variables:
  Name: 'Morpheus'
  Job: 'leader'
  Response: ~
  Server: https://reqres.in/api/v1

request:
  url: "{$Server}/users"
  method: POST
  body[json]: {
    'name': $Name,
    'job': $Job,
  }
  return: ~

spec:
  execute:
    file: ~
    result: $Response

  asserts:
    - {type: AssertEqual, actual: $Response.code, expected: 201}
    - {type: AssertIsMap, actual: $Response.body}
```
