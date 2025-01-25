---
title: Variables
---
### Introduction

Variables are ways to hold value or computed values in specification files, like in programming language.

### Variables

Variables can be defined with `variables` section on a supported specification document.

```yml
version: default:http:0.7.2

variables:
  var1: 22
```

This variables can be later used, i.e.

```yml
# ---
# file name: request-someurl.chk
# ---

version: default:http:0.7.2

variables:
  # emailAddr: "user-<% range(1, 5) | random %>@domain.ext"
  emailAddr: "user@domain.ext"

request:
  url: "https://find-by-email.ext?emailAddress=<% $emailAddr %>"

...
```

### Passing variables from console

It's possible to pass variables from console while invoking `chk` command. e.g:

So, for following HTTP specification:

```yml
# ---
# file name: request-someurl.chk
# ---

version: default:http:0.7.2

variables:
  emailAddr: ~

request:
  url: "https://find-by-email.ext"
  url_params:
    emailAddress: <% $emailAddr %>

...
```
```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% $emailAddr %>` with `"user@domain.ext"`, before making request. Also, when without passing variable from console, `<% $emailAddr %>` will be replaced with `null`.

### Setting default value

It's possible to set a default value for a variable. Consider following example:

```yml
# ---
# file name: request-someurl.chk
# ---

version: default:http:0.7.2

variables:
  emailAddr: "user-<% range(1, 5) | random %>@domain.ext"

request:
  url: "https://find-by-email.ext"
  url_params:
    emailAddress: <% $emailAddr %>


...
```

When invoked like:

```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% $emailAddr %>` with `"user@domain.ext"`, before making request.

However, if invoked like:

```shell
chk fetch request-someurl.chk
```

Then CHKware will replace `<% $emailAddr %>` with `"user-2@domain.ext"` (or with an email of randomly picked number).

### Variable templating with Jinja2

For variable templating *CHKware* uses Jinja2. Almost all of the [Jinja2 features](https://jinja.palletsprojects.com/en/stable/templates/) are supported. That makes it possible to change variables values. e.g:

```yml
version: default:http:0.7.2

variables:
  userId: <% range(1, 5) | random %>
  emailAddr: "user-<% userId %>@domain.ext"

request:
  url: "https://find-by-email.ext"
  url_params:
    userId: <% $userId %>
    emailAddress: <% $emailAddr %>

...
```

### Exposable variables

*Exposable variables* are special variables to exposes data to caller system. These exposable variables send data to caller system after a success or fail operation.

> There are two caller systems available now: a) Console, b) Workflow module.

Exposable variables can be defined with `expose:` node.

```yml
version: default:http:0.7.2

variables:
  ...

expose:
  - <% _response %>
```

This YAML node is not required. However, if the node is not included, nothing will be displayed in console response.

<!-- For example:

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
  - `_assertion_results.assert_fn` stores the assertion function used when assertion fails -->

<!-- #### `expose` node

Special block that can used to expose data from callee environment to caller environment. We can write any local variable data to be exposed from this section. `expose` node expects an array to be written. It also can be left as null.

For example to expose response data after the request have been executed and got response successfully. eg:

```yml
expose:
  - "{$_response.body}"
  - "{$_response.code}"
```

or after a testcase execution is done

```yml
expose: [
  "{$_response.body}",
  "{$_response.code}",
  "{$_assertion_results.2.name_run}",
  "{$_assertion_results}",
  "{$_response}"
]

# or

expose: ["{$_assertion_results.2.name_run}", "{$_assertion_results.2.is_success}"]
``` -->
