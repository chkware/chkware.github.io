---
title: Variable specification reference
---

:::note
- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.
:::

### Introduction

Variables are ways to hold value or computed values, like in programming language.

### Definition

Variables can be defined in two ways:

1. Variable specification file. Files with `version: default:variable:x.x.x` [**WIP** - not available yet]
2. `variables` section on a supported specification document. See below.
    ```yaml
    version: default:http:0.7.2

    variables:
      var1: value one
      var_2: 'value 2'
    ...
    ```

### Supported specification document

- [Http specification document examples](/examples/http-examples#variable-examples) | [More example](https://github.com/chkware/cli/tree/0272b83c2975349fd3f0d94e1646cc27b603eaf5/tests/resources/storage/sample_config/pass_cases/variables)
- [Testcase specification document examples](/examples/testcase-examples) | [More example](https://github.com/chkware/cli/tree/890c2a6c11c5b16be4678ac27083befa1ef0986c/tests/resources/storage/sample_config/pass_cases/UserCreate)
