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
