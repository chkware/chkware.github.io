---
title: Workflow examples
---

:::note

Following YAML specs are working examples. This page should be use as reference for _Workflow_ specification files.

This page is **SUBJECT TO CHANGE**. It is requested to check this page frequently.

These examples can be found [in here](https://github.com/chkware/chkware.github.io/tree/main/sample_specs/examples).

:::

### Minimal workflow spec.

```yml
---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk

  - name: Name task 2
    uses: fetch
    file: ../validate/some-other-request.chk

expose:
  - <% _steps %>
```

### Set data for validate task

```yml
---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
```

### Set variables and arguments (validate tasks)

```yml
---
version: default:workflow:0.8.0

name: Name your workflow

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk
    variables:
      Var1: Some String value
      Var2: 11

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
```

### Set variables (dynamic) and arguments (validate tasks)

```yml
---
version: default:workflow:0.8.0

name: Name your workflow

variables:
  var1: Some String value
  var3: [1, 2, 3]

tasks:
  - name: Name task 1
    uses: fetch
    file: ../fetch/some-request.chk
    variables:
      Var1: <% var1 %>
      Var2: 11

  - name: Name task 2
    uses: validate
    file: ../validate/some-validate.chk

    variables:
      Var3: <% var3 %>
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
```
