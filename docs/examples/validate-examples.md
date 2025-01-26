---
title: Validate examples
---

:::note

Following YAML specs are working examples. This page should be use as reference for _Validate_ specification files.

This page is **SUBJECT TO CHANGE**. It is requested to check this page frequently.

These examples can be found [in here](https://github.com/chkware/chkware.github.io/tree/main/sample_specs/examples).

:::

### Minimal validate spec

```yaml
---
version: default:validate:0.7.2

asserts:
  - { type: Equal, actual: 200, expected: 200 }

expose:
  - <% _asserts_response %>
```

### Validate spec for multiple case check

As we can see `asserts:` section can hold YAML list, so any number asserts can be added.

```yaml
---
version: default:validate:0.7.2

asserts:
  - { type: Equal, actual: 200, expected: 200 }
  - { type: Integer, actual: 10 }

expose:
  - <% _asserts_response %>
```

### Defining data to validation in file

Validate spec have a special `_data` variable, a variable to store data to be validated.

It is possible to set `_data` variable using `data:` node in the spec.

```yaml
---
version: default:validate:0.7.2

data:
  age: 10
  name: Some name

asserts:
  - type: IntegerGreaterOrEqual
    actual: <% _data.age %>
    other: 10

  - type: IntegerLess
    actual: <% _data.name | length %>
    other: 256

expose:
  - <% _asserts_response %>
```

### Defining data for validation from console

Data can be with `--data` (or `-D`) or `--data-input` (or `-Di`) options in `chk validate` command.

```yaml
---
version: default:validate:0.7.2

asserts:
  - type: IntegerGreaterOrEqual
    actual: <% _data.age %>
    other: 10

  - type: IntegerLess
    actual: <% _data.name | length %>
    other: 256

expose:
  - <% _asserts_response %>
```

and in shell

```shell
chk validate validate-data-input.chk -D '{"age": 10, "name": "Some name"}'
```

Or

```shell
echo '{"age": 10, "name": "Some name"}' | chk validate validate-data-input.chk -Di
```

Data for validation can be also set from Workflow spec file.

### Validate variable data

```yaml
---
version: default:validate:0.7.2

variables:
  age: 10
  name: Some name

asserts:
  - type: IntegerGreaterOrEqual
    actual: <% age %>
    other: 10

  - type: IntegerLess
    actual: <% name | length %>
    other: 256

expose:
  - <% _asserts_response %>
```

### Expose content of `_data`

```yaml
---
version: default:validate:0.7.2

asserts:
  - ...

expose:
  - <% _data %>
```

Assertion [reference](/docs/references/validate-spec) can be found here.
