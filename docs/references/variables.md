---
title: Variables
---
Variables are ways to hold value or computed values in specification files, like in programming language.

## Variables node

Variables can be defined with `variables` node on a specification document. This node is support on all kind of spec.

```yml {3-4}
version: default:http:0.7.2

variables:
  var1: 22

...  
```

This variables can be used later, e.g.

```yml {3-4,7}
version: default:http:0.7.2

variables:
  emailAddr: "user@domain.ext"

request:
  url: "https://httpbin.org/get?emailAddress=<% emailAddr %>"
  ...
```

::::tip [Naming variables]

Variable names can include

- `A-Z`
- `a-z`
- `0-9`
- `.` dot
- `-` dash
- `_` underscore

:::warning

It is not possible to start a variable name with _underscore_ (`_`). Therefore, `_Name` is an invalid name, when `Name_` is valid.

:::

::::

## Passing variables from console

It's possible to pass variables from console while invoking `chk` command. Let's have following HTTP specification:

```yml [title="request-someurl.chk"] {5,10}
---
version: default:http:0.7.2

variables:
  emailAddr: ~

request:
  url: "https://httpbin.org/get"
  url_params:
    emailAddress: <% emailAddr %>
...
```

```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% emailAddr %>` with `"user@domain.ext"`, before making request. When variable not passed from console, `<% emailAddr %>` will be replaced with `null`.

## Setting default value

It's possible to set a default value for a variable. Consider following example:

```yml [title="request-someurl.chk"] {5,10}
---
version: default:http:0.7.2

variables:
  emailAddr: "user-<% range(1, 5) | random %>@domain.ext"

request:
  url: "https://httpbin.org/get"
  url_params:
    emailAddress: <% emailAddr %>
...
```

When invoked in the console like:

```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% emailAddr %>` with `"user@domain.ext"`, before making request.

However, if invoked in the console like:

```shell
chk fetch request-someurl.chk
```

Then CHKware will replace `<% emailAddr %>` with something like `"user-2@domain.ext"` (or with an email of randomly picked number) since we set default value to `user-<% range(1, 5) | random %>@domain.ext`.

## Variable templating with Jinja2

For variable templating _CHKware_ uses Jinja2. Almost all of the [Jinja2 features](https://jinja.palletsprojects.com/en/stable/templates/) are supported. That makes it possible to change variables values. e.g:

```yml [title="request-someurl.chk"] {4-5,10-11}
version: default:http:0.7.2

variables:
  userId: 5
  emailAddr: "user-<% userId %>@domain.ext"

request:
  url: "https://httpbin.org/get"
  url_params:
    userId: <% userId %>
    emailAddress: <% emailAddr %>
...
```
