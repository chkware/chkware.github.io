---
title: Testcase specification reference
---

:::note

- This page should be use as reference for testcase specification files.
- This page is subject to change. It is requested to check this page frequently.
- Currently JSON response is only supported type for assertions.

:::

The _Testcase specification_ format is how anyone express one or more test case(s) for a given _HTTP specification_. Following is the full reference to write _Testcase specification_ file.

## Testcase specification

Testcase specification document is a versioned document, meaning there MUST be a `version:` key on the document.

It's also an _**exposable document**_ meaning you can expose local data using `expose:` key in the document. More on this in [variable spec. reference](/docs/references/variables)

### Reference as example

There are only 2 things we define in a testcase spec. doc.

- How to make the API request
- What to expect from the response that got returned as API response

There are 2 ways anyone can define how to do an API request.

1. with an in-file `request`
2. `request` in separate http spec. doc.

In the testcase spec. doc. `spec.asserts` section defines what to expect from the response that got returned as API response. It is a list of assertions that one can make against response.

#### 1. With in-file `request`

1st way is to write a `request` (that defines the http request) and `spec` (that defines what to assert) in same file. E.g:

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
  asserts:
    - { type: AssertEqual, actual: "{$_response.code}", expected: 201 }
    - { type: AssertIsMap, actual: "{$_response.body}" }

expose:
  - "{$_assertion_results}"
  - "{$_response}"
```

#### 2. `request` in separate http spec. doc

```yaml
# file: some-request.chk
---
version: "default:http:0.7.2"

variables:
  Name: "Morpheus"
  Job: "leader"
  Server: https://reqres.in/api/v1

request:
  url: "{$Server}/users"
  method: POST
  body[json]: { "name": "{$Name}", "job": "{$Job}" }
```

and a separate testcase file referencing the `some-request.chk` http spec. doc. in `spec.execute.file`.

```yaml
# file: some-testcase.chk
---
version: "default:testcase:0.7.2"

spec:
  execute:
    file: some-request.chk
    with:
      Name: "Neo"
      Job: "The chosen one"

  asserts:
    - { type: AssertEqual, actual: "{$_response.code}", expected: 201 }
    - { type: AssertIsMap, actual: "{$_response.body}" }

expose: ~
```

---

### `version` (<small>_`required`_</small>)

`version` is a top-level block that defines a document version. How to write a `version:` block, is [already defined here](/docs/references/version).

### `request`

- _`required`_ if no external http spec. doc to be linked
- _`must not`_ if `spec.execute.file` if a http specification doc is linked

`request` is a top-level block that defines a http request. How to write a `request:` block, is [already defined here](/docs/references/http-reference#request-required).

`request` block, and `spec.execute.file` MUST NOT stay on same file. System will throw an error on that case.

### `variables`

`variables` is a top-level block that defines local variables. These variables are file scoped. How to write a `variables:` block, is [already defined here](/docs/references/variables).

### `spec` (<small>_`required`_</small>)

`spec` is a top-level block that defines a testcase specification.

```yaml
spec: ...
```

### `spec.execute` (<small>_`required`_</small>)

`spec.execute` is a sub-block that defines a testcase spec's pre-requisite http request execution before making assertion(s). It has following components:

- `spec.execute.file` is used to point the file that contains http specification to run before assertion. If unavailable, or set to null, then system executes any `request` block from current file.
- `spec.execute.with` is used to pass local scoped variables to external linked file on `spec.execute.file` before execution happen. Not supported for locally linked `request` block.
- `spec.execute.result` is used to store result(s) of the execution. Here we can put a locally scoped variable to receive data to store after request is done. If a testcase spec. contains an in-file request, then this section is not allowed.

```yaml
---
variables:
  Response: ~

spec:
  execute:
    file: some-request.chk
    with:
      Name: "Neo"
      Job: "The chosen one"
    result: "{@Response}"
```

### `spec.assertions` (<small>_`required`_</small>)

`spec.assertions` is a sub-block that defines a testcase spec's post http request execution assertion(s). It supports a list of assertions to be supplied. Each of the list item consists of assertion object. Assertion object have following components:

```yaml
{ type: AssertEqual, actual: "{$Response.code}", expected: 201 }
```

- `type` of assertion to be executed.
- `actual` what to assert, usually a local variable or one of it's node.
- `expected` what is expect value

```yaml
---
spec:
  asserts:
    - { type: AssertEqual, actual: "{$Response.code}", expected: 201 }
    - type: assertIsMap
      actual: "{$Response}"
```

[More about assertions](/docs/references/assertion-reference) can be found here.

### `expose`

`expose` is a sub-block, that can be used to expose local variable of this file to outer scope.

For testcase specification document local variable called `_assertion_results` which holds after assertion output, and `_response` which holds response after request execute, are available.

See docs on [expose node](/docs/references/variables#expose-node)
