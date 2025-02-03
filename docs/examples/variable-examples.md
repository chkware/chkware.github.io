---
title: Variable examples
---

:::note

Following YAML specs are working examples. This page should be use as reference for _Variable_ specification files.

This page is **SUBJECT TO CHANGE**. It is requested to check this page frequently.

These examples can be found [in here](https://github.com/chkware/chkware.github.io/tree/main/sample_specs/examples).

:::

Variables can be used inside any spec files. with a special `variables:` yaml node. `variables:` should contain YAML objects. Exposed variables is defined in `expose:` yaml node. `expose:` should contain YAML list.

> `expose:` is used to export value to the caller. Caller can be console, or workflow spec.

### Variables to replace values

```yaml
---
version: default:http:0.7.2

variables:
  Limit: 10
  Skip: 5

request:
  url: https://dummyjson.com/todos
  method: GET

  url_params:
    limit: <% Limit %>
    skip: <% Skip %>

expose:
  - <% _response %>
```

### Variables to replace values in string

```yaml
---
version: default:http:0.7.2

variables:
  Limit: 10
  Skip: 5
  Endpoint: "todos"

request:
  url: https://dummyjson.com/<% Endpoint %>
  method: GET

  url_params:
    limit: <% Limit %>
    skip: <% Skip %>

expose:
  - <% _response %>
```

### Use filter with variables

```yaml
---
version: default:http:0.7.2

variables:
  Email: "here.is.a.long.email.address@domain.ext"

request:
  url: https://httpbin.org/post
  method: POST

  body[json]:
    email: <% Email %>
    possibleUserName: <% Email | replace("@domain.ext", "") %>
    possibleUserNameLen: <% Email | replace("@domain.ext", "") | length %>

expose:
  - <% _response %>
```

### Pass variable from console

```yaml
---
version: default:http:0.7.2

variables:
  Limit: 10
  Skip: 5

request:
  url: https://dummyjson.com/todos
  method: GET

  url_params:
    limit: <% Limit %>
    skip: <% Skip %>

expose:
  - <% _response %>
```

and in shell

```shell
chk fetch variable-console.chk -V '{"Limit": 20, "Skip": 5}'
```

In this above case, variables defined in the file will act as default value, in case no variable passed from console.
