---
title: Variables
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.

:::

### Introduction

Variables are ways to hold value or computed values, like in programming language.

### Variables

Variables can be defined in two ways:

1. Variable specification file. Files with `version: default:variable:x.x.x` [**WIP** - not available yet]
2. `variables` section on a supported specification document.

```yaml
version: default:http:0.7.2

variables:
  var1: value one
  var_2: "value 2"
```

3. Variable can be also passed from a command-line invoke. e.g:

Say a http spec. file looks following

```yaml
version: default:http:0.7.2

variables:
  var1: 22

request:
  url: https://someurl.com?var-one={$var1}
  ...
```

and in the command-line you pass as following

```bash
chk http tests/xkcd-joke.chk var1=23
```

then CHKware will replace `{$var1}` with `23`, before making request

```yaml
---
# url: https://someurl.com?var-one={$var1}
# to
url: https://someurl.com?var-one=23
```

However in the command-line you if pass no variable. e.g.

```bash
chk http tests/xkcd-joke.chk
```

then CHKware will replace `{$var1}` with `22` as it's the default value, before making request

```yaml
---
# url: https://someurl.com?var-one={$var1}
# to
url: https://someurl.com?var-one=22
```

### Exposable

There are some special hidden local variable those are available at runtime of the execution. Those are exposable variables.

There is one special type of variable block that can be use in a http / testcase specification file to expose these exposable to callee environment. This exposeable section cab be defined with `expose` node.

For example:

- `_response` is a local variable that is available in both http and testcase specifications. This special local variable named `_response` get added after the response received successfully.

  These nodes are available under `_response` are `version`, `code`, `reason`, `headers`, `body`.

  Therefore, to access `code` you're supposed to use `_response.code`.

  - `_response.code` holds response status code. e.g. 200, 400, 401, etc
  - `_response.headers` holds response headers.
  - `_response.body` holds response body.
  - `_response.reason` holds response reason. e.g. 'Created', 'Moved Permanently', etc [more here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  - `_response.version` holds response HTTP version. e.g. 'HTTP/1.1'

- `_assertion_results` is a local variable that is available in testcase specifications. This special local variable named `_assertion_results` get added to local variable stack after all the assertion is resolved. `_assertion_results` holds a list of objects.

  Each objects those `_assertion_results` can hold have following nodes: `name`, `name_run`, `actual_original`, `is_success`, `message`, `assert_fn`

  Therefore, to access `actual_original` you're supposed to use `_assertion_results.1.actual_original`.

  - `_assertion_results.name` stores name of the assertion
  - `_assertion_results.name_run` stores name of the specific name and run, this uniquely identifies and assertion
  - `_assertion_results.actual_original` original variable that was supposed to be asserted
  - `_assertion_results.is_success` stores the boolean result of the
  - `_assertion_results.message` stores the error message if the assertion fails
  - `_assertion_results.assert_fn` stores the assertion function used when assertion fails

#### `expose` node

Special block that can used to expose data from callee environment to caller environment. We can write any local variable data to be exposed from this section. `expose` node expects an array to be written. It also can be left as null.

For example to expose response data after the request have been executed and got response successfully. eg:

```yaml
expose:
  - "{$_response.body}"
  - "{$_response.code}"
```

or after a testcase execution is done

```yaml
expose: [
  "{$_response.body}",
  "{$_response.code}",
  "{$_assertion_results.2.name_run}",
  "{$_assertion_results}",
  "{$_response}"
]

# or

expose: ["{$_assertion_results.2.name_run}", "{$_assertion_results.2.is_success}"]
```

### Supported specification document

- [HTTP specification document examples](/docs/examples/http-examples#variable-examples) | [More example](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_config/pass_cases/variables)
- [Testcase specification document examples](/docs/examples/validate-examples) | [More example](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_config/pass_cases/testcases)
