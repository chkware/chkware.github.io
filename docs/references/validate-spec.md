---
title: Validate specification
---

The _Validate specification_ format represents a JSON validation mechanism. The spec. can be used to validate any JSON document or API response. Utilizing assertion on JSON nodes, those are accessible via dot-notion makes it a quicker and leaner approach.

Validate specification document supports `version: default:validate:0.7.2` version.

<details>
  <summary>All supported nodes in Validate specification document</summary>

  ```yml
  version: default:validate:0.7.2

  variables:
    code: 200

  data:
    price: 200.10

  asserts:
    - type: Equal
      actual: <% code %>
      expected: 200
      other: 200
      msg_pass: 'Response was successful'
      msg_fail: 'Response was unsuccessful'
      cast_actual_to: 'Response was unsuccessful'

    - type: Integer
      actual: <% code %>

    - type: Equal
      actual: <% _data.price %>
      expected: 200.10

  expose:
    - <% _asserts_response %>
    - <% _data %>
  ```
</details>

## `version` (<small>*`required`*</small>)

This is a top-level block that defines the spec. document version. Read details of [_version reference_](/docs/references/version) here.

```yml {1}
version: default:validate:0.7.2

data:
  ...

asserts:
  ...
...
```

## `variables`

`variables` is a top-level block that defines local variables. These variables are not accessible outside of this file scope.

```yml {3-4}
version: default:validate:0.7.2

variables:
  Name: "Variable Value"

data:
  code: 200

asserts:
  ...
```

Read details of [*variables*](/docs/references/variables) here.

## `data`

`data` is a top-level node that stores data to be validated. There is a special variable, called `_data`, specific to validate spec. This node can be used to set `_data` variable.

`data` only supports YAML maps, where keys holds strings and values contains YAML collection (dictionary / hashmap) or scaler values.

```yml {3-4}
version: default:validate:0.7.2

data:
  code: 200

asserts:
  ...
```

## `asserts` (<small>*`required`*</small>)

This is a top-level block to defines list of assertions. These assertions can target both data and variables.

Data type for `asserts` node is list of assert item.

### `asserts[*].assertItem` (<small>*`required`*</small>)

Assert items define assertion for one specific case. It looks like following:

```yml
version: default:validate:0.7.2

data:
  code: 200

variables:
  Name: "Variable Value"

asserts:
  - type: Equal
    actual: <% code %>
    expected: 200
    msg_pass: 'Response was successful'
    msg_fail: 'Response was unsuccessful'

  - # [assertItem] 
```

Explanation of possible nodes:

- `assertItem.type` Type of assert or the assertion key.
- `assertItem.actual` Actual data point for validation. Variables or data can be used.
- `assertItem.expected` Expected data point for validation. Variables or data can be used.
- `assertItem.other` Other data for compare. Variables or data can be used.
- `assertItem.msg_pass` An alternative message to display on success
- `assertItem.msg_fail` An alternative message to display on failure
- `assertItem.cast_actual_to` Cast data to the type before assertion

[More about assertions](/docs/references/assertions) here.

## `expose`

`expose` is a top level node for [exposable variable](./variables-exposable.md) for this spec. to caller scope.

Validate specification document exposes `_assertion_results` that contains assertion results after each assetion, and `_data` which holds assertion data (when provided)

`_assertion_results` has following nodes:

- `_assertion_results.id` Id of the test run
- `_assertion_results.time_start` Start time of the test run
- `_assertion_results.time_end` End time of the test run
- `_assertion_results.count_all` Count of asserts used
- `_assertion_results.count_fail` How many of asserts failed
- `_assertion_results.details` List of assert details, nodes of assert entry
- `_assertion_results.details[*].is_pass` Was the assertion as pass
- `_assertion_results.details[*].message` The message to show
- `_assertion_results.details[*].assert_entry` List of assert details, nodes of assert entry

`_assertion_results.details[*].assert_entry` object have following nodes

- `assert_type` The type or key of assert
- `actual` Actual value after data replacements
- `expected` Expected value after data replacements
- `msg_pass` Message to show if the test case passes
- `msg_fail` Message to show if the test case fails
- `cast_actual_to` Cast operation that was used, if given.
- `actual_given` List of details assertion
- `actual_b4_cast` List of details assertion
- `extra_fields` List of details assertion