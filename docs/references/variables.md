---
title: Variables
---
### Introduction

Variables are ways to hold value or computed values in specification files, like in programming language.

### Variables

Variables can be defined with `variables` node on a supported specification document.

```yml
version: default:http:0.7.2

variables:
  var1: 22
```

This variables can be later used, i.e.

```yml
version: default:http:0.7.2

variables:
  emailAddr: "user@domain.ext"

request:
  url: "https://httpbin.org/get?emailAddress=<% emailAddr %>"

...
```

It is not possible to name a variable prefixing an *underscore* (`_`). So, `_Name` is an invalid name. Variable names can include `A-Z, a-z, 0-9, ., -, _`.

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
  url: "https://httpbin.org/get"
  url_params:
    emailAddress: <% emailAddr %>

...
```
```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% emailAddr %>` with `"user@domain.ext"`, before making request. When variable not passed from console, `<% emailAddr %>` will be replaced with `null`.

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
  url: "https://httpbin.org/get"
  url_params:
    emailAddress: <% emailAddr %>


...
```

When invoked like:

```shell
chk fetch request-someurl.chk -V {"emailAddress": "user@domain.ext"}
```

Then CHKware will replace `<% emailAddr %>` with `"user@domain.ext"`, before making request.

However, if invoked like:

```shell
chk fetch request-someurl.chk
```

Then CHKware will replace `<% emailAddr %>` with something like `"user-2@domain.ext"` (or with an email of randomly picked number).

### Variable templating with Jinja2

For variable templating *CHKware* uses Jinja2. Almost all of the [Jinja2 features](https://jinja.palletsprojects.com/en/stable/templates/) are supported. That makes it possible to change variables values. e.g:

```yml
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
