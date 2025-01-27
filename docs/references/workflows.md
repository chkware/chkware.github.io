---
title: Workflow specification
---

The **Workflow specification format** is used to create a workflow of _CHKware_ tasks.

Workflow specification document supports `default:workflow:0.8.0` version.

<details>
  <summary>All supported nodes workflow spec.</summary>

```yml
---
version: default:workflow:0.8.0

name: simple Btc workflow
id: BtcWF1

variables:
  group: coinstats
  currency: GBP

tasks:
  - name: Fetch some content from URL
    uses: fetch
    file: "./<% group %>-usd-request.chk"
    variables:
      convertCurrency: <% currency %>

  - name: Validate the content is okay
    uses: validate
    file: "./<% group %>-usd-validate.chk"
    arguments:
      data: <% _steps.0._response %>

expose:
  - <% _steps %>
```

</details>

## `version` (<small>_`required`_</small>)

`version` is a top-level block that defines a document version. How to write a `version:` block is already defined in [_version reference_](/docs/references/version).

## `name` (<small>_`required`_</small>)

`name` is a top-level block that defines a workflow name.

## `id`

`id` is a top-level block that defines a workflow id.

## `variables`

`variables` is a top-level block that defines local variables. These variables are not accessible outside of this file scope.

Read details of [_variables_](/docs/references/variables) here.

## `tasks` (<small>_`required`_</small>)

Tasks holds a list of task definition. Each task definition contains a YAML object to configure task. e.g:

```yml
tasks:
  - name: Fetch some content from URL
    uses: fetch
    file: "./<% group %>-usd-request.chk"
    variables:
      convertCurrency: <% currency %>
```

### `tasks[*].item` (<small>_`required`_</small>)

Task definition have can be configured with following nodes:

- `name`: Definition of the task
- `uses`: The _CHKware_ module you want to execute
- `file`: Name of the file that stores this tasks definition. Usually a _CHKware_ spec file.
- `variables`: Pass any extra variable need to be passed to the task.
- `arguments`: Pass any arguments need to be passed to the task. `data:` is the only supported argument now.

## `expose`

`expose` is a sub-block, that can be used to expose local variable of this file to outer scope.

Workflow specification document exposes a variable called `_steps` which holds tasks and steps information for the spec.

See docs on [expose node](/docs/references/variables-exposable)
