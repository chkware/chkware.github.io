---
title: Testcase specification reference
---

:::note
- This page should be use as reference for testcase specification files.
- This page is subject to change. It is requested to check this page frequently.
- Currently JSON response is only supported type for assertions.
:::

The Testcase specification format is how anyone express one or more Testcase(s) for a given Http specification. Following is the full reference to write Testcase specification file.

## Testcase specification

Testcase specification document is a versioned document, meaning there MUST be a `version:` key on the document. 

It's also an _**exposable document**_ meaning you can expose local data using `expose:` key in the document. More on this in [variable spec. reference](/references/variable-reference)

### Reference as example

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
    with: ~
    result: $Response

  asserts:
    - {type: AssertEqual, actual: $Response.code, expected: 201}
    - {type: AssertIsMap, actual: $Response.body}

expose:
  - $_assertion_results
```

---

### `version` (<small>_`required`_</small>)

`version` is a top-level block that defines a document version. How to write a `version:` block, is [already defined here](/references/version-reference).

### `request`

- _`required`_ if `spec.execute.file` is empty
- _`optional`_ if `spec.execute.file` if a http specification doc is linked

`request` is a top-level block that defines a http request. How to write a `request:` block, is [already defined here](/references/http-reference#request-required).

### `variables`

`variables` is a top-level block that defines local variables. These variables are file scoped. How to write a `variables:` block, is [already defined here](/references/variable-reference).

### `spec` (<small>_`required`_</small>)

`spec` is a top-level block that defines a testcase specification.

```yaml
spec:
  ...
```

### `spec.execute` (<small>_`required`_</small>)

`spec.execute` is a sub-block that defines a testcase spec's pre-requisite http request execution before making assertion(s). It has following components:

- `spec.execute.file` is used to point the file that contains http specification to run before assertion. If unavailable, or set to null, then execute current file `request` block.
  > [TBD] External file not supported now
- `spec.execute.with` is used to pass local scoped variables to external linked file on `spec.execute.file` before execution happen. Not supported for locally linked `request` block.
- `spec.execute.result` is used to store result(s) of the execution. Here we can put a locally scoped variable to receive data to store after request is done.

```yaml
...
variables:
  Response: ~

spec:
  execute:
    file: ~
    with: ~
    result: $Response
```

### `spec.assertions` (<small>_`required`_</small>)

`spec.assertions` is a sub-block that defines a testcase spec's post http request execution assertion(s). It supports a list of assertions to be supplied. Each of the list item consists of assertion object. Assertion object have following components:
{type: AssertEqual, actual: $Response.code, expected: 201}

- `type` of assertion to be executed.
- `actual` what to assert, usually a local variable or one of it's node.
- `expected` what is expect value

```yaml
...
spec:
  asserts:
    - {type: AssertEqual, actual: $Response.code, expected: 201}
    - type: assertIsMap
      actual: $Response
```

[More about assertions](/references/assertion-reference) can be found here.


### `expose`

`expose` is a sub-block, that can be used to expose local variable of this file to outer scope. For testcase specification document have a local variable called `$_assertion_results` which holds after assertion output.

See docs on [expose node](/references/variable-reference#expose-node)
