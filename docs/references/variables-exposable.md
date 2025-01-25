---
title: Exposable variables
---

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

*Exposable variables* , those starts with *underscore* (`_`), are defined by modules. Meaning, modules control what data it want to reveal to caller system. Usually, module revealed exposables are prefixed with *underscore* (`_`). In above example `_response` is a variable exposed from *fetch module*.

All variables defined or pass (from caller) can be also exposed. For example this is also valid.

```yml
version: default:http:0.7.2

variables:
  FirstName: APerson's First Name

request:
  ...

expose:
  - <% _response %>
  - <% FirstName %>
```

### Return value of exposable node

In the console invoking `chk` command with `--no-format, -nf` will return a JSON representation of exposable variables. The returned JSON is always a JSON-list with object or scaler value in it. e.g:


```yml
version: default:http:0.7.2

variables:
  userId: 4
  emailAddr: "user-<% userId %>@domain.ext"

request:
  url: "https://httpbin.org/get"
  url_params:
    userId: <% userId %>
    emailAddress: <% emailAddr %>
  method: GET

expose:
  - <% userId %>
  - <% emailAddr %>
```

When invoked like:

```shell
$ chk fetch request-someurl.chk --no-format
[4, "user-@domain.ext"]
```



<!-- For example:

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
