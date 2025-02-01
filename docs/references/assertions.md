---
title: Assertions
---

Assertions are integral part of [_Validate specification_](/docs/references/validate-spec).

Assertions are used for the validation of specific data point. Asserts are written in _validate specification_.

## Assert items
_CHKware_ have a collection of built-in assert items. Assertion item object have following components:

- `type` Type of assertion to be executed or the assertion key.

- `actual` Actual data point for validation. Variables or data can be used.

- `expected` Expected data point for validation. Variables or data can be used. Most assert item have `expected` alternative to `other`. Both can not exist in same assert item at the same time.

- `other` Other data point for compare. Variables or data can be used. Some assert item have `other` alternative to `expected`. Both can not exist in same assert item at the same time.

- `format` Format of a date. Only supported with [Date assert](#date) items

  :::tip

  Supports these [format code](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes).

  :::

- `msg_pass` An alternative message to display on success.

  :::tip

  It is possible to pass formatted string to `msg_pass`. Following values are supported:

  - assert_type : Assert item type, e.g: `Str`, `Integer`, `Count`, etc
  - type_actual : Type of the actual given on spec file
  - type_expected : Type of the expected given on spec file
  - value_expected : Value of the expected given on spec file
  - value_actual : Value of the actual after cast conversion
  - value_actual_given : Value of the actual given on spec file
  - value_actual_b4_cast : Value of the actual before cast conversion

  E.g: "actual `{type_actual}({value_actual})` is equal to expected `{type_expected}({value_expected})`"

  :::

- `msg_fail` An alternative message to display on failure

  :::tip

  It is possible to pass formatted string to `msg_fail`. Following values are supported:

  - assert_type : Assert item type, e.g: `Str`, `Integer`, `Count`, etc
  - type_actual : Type of the actual given on spec file
  - type_expected : Type of the expected given on spec file
  - value_expected : Value of the expected given on spec file
  - value_actual : Value of the actual after cast conversion
  - value_actual_given : Value of the actual given on spec file
  - value_actual_b4_cast : Value of the actual before cast conversion

  E.g: "actual `{type_actual}({value_actual})` is not equal to expected `{type_expected}({value_expected})`"

  :::

- `cast_actual_to` Cast data to the type before assertion

  :::tip

  It is possible to cast type of `actual` value before comparison with `expected` with `cast_actual_to`.

  These types are supported: `int_or_float`, `int`, `float`, `bool`, `none`, `map`, `list`, `str`, `auto`

  :::

<details>
  <summary>All supported nodes in assert item</summary>

```yml
---
version: default:validate:0.7.2

variables:
  code: "200"

data:
  price: 200.10

# --- assert item list ---
asserts:
  # --- an assert item ---
  - type: Equal
    actual: <% code %>
    expected: 200
    msg_pass: "Response was successful"
    msg_fail: "Response was unsuccessful"
    cast_actual_to: "int"

  - type: IntegerGreaterOrEqual
    actual: <% code | int %>
    other: 200

  - { type: IntegerLess, actual: <% _data.price %>, other: 300 }
# --- asserts end ---

expose:
  - <% _asserts_response %>
  - <% _data %>
```

</details>

## Assert types

Following are currently supported assert types.

## Boolean

### Equal

Checks if `actual` and `expected` is equal.

```yml
asserts:
  - { type: Equal, actual: 201, expected: 201 }
```

### NotEqual

Checks if `actual` and `expected` is not equal.

```yml
asserts:
  - { type: NotEqual, actual: 300, expected: 200 }
  - { type: NotEqual, actual: <% "300" | int %>, expected: 200 }
```

### Empty

Checks if `actual` is empty.

```yml
asserts:
  - { type: Empty, actual: "" }
  - { type: Empty, actual: ~ }
  - { type: Empty, actual: 0 }
```

### NotEmpty

Checks if `actual` is not empty.

```yml
asserts:
  - { type: NotEmpty, actual: "NAME" }
  - { type: NotEmpty, actual: { "a": "char" } }
  - { type: NotEmpty, actual: 20 }
```

### Declined

Checks if `actual` is one of declined values.

```yml
asserts:
  - { type: Declined, actual: "No" }
  - { type: Declined, actual: "NO" }
  - { type: Declined, actual: "no" }
  - { type: Declined, actual: 0 }
  - { type: Declined, actual: "Off" }
  - { type: Declined, actual: "OFF" }
  - { type: Declined, actual: "off" }
  - { type: Declined, actual: False }
  - { type: Declined, actual: "False" }
  - { type: Declined, actual: "FALSE" }
  - { type: Declined, actual: "false" }
```

### Accepted

Checks if `actual` is one of accepted values.

```yml
asserts:
  - { type: Accepted, actual: "Yes" }
  - { type: Accepted, actual: "YES" }
  - { type: Accepted, actual: "yes" }
  - { type: Accepted, actual: 1 }
  - { type: Accepted, actual: "On" }
  - { type: Accepted, actual: "ON" }
  - { type: Accepted, actual: "on" }
  - { type: Accepted, actual: True }
  - { type: Accepted, actual: "True" }
  - { type: Accepted, actual: "TRUE" }
  - { type: Accepted, actual: "true" }
```

### Boolean

Checks if `actual` is of boolean type.

```yml
asserts:
  - { type: Boolean, actual: True }
  - { type: Boolean, actual: "true", cast_actual_to: bool }
  - { type: Boolean, actual: True, expected: False }
  - { type: Boolean, actual: True, expected: 2 }
  - { type: Boolean, actual: "true", expected: False, cast_actual_to: bool }
```

## Numeric

### Integer

Checks if `actual` is of integer type.

```yml
asserts:
  - { type: Integer, actual: 10 }
  - { type: Integer, actual: -10 }
```

### IntegerBetween

Checks if `actual` is of integer type and the `actual` contains value in between the value of `min` and `max`.

```yml
asserts:
  - { type: IntegerBetween, actual: 12, min: 11, max: 13 }
  - {
      type: IntegerBetween,
      actual: "12",
      min: 11,
      max: 13,
      cast_actual_to: int,
    }
```

### IntegerGreater

Checks if `actual` is of integer type and the value `actual` contains is greater than the value of `other`.

```yml
asserts:
  - { type: IntegerGreater, actual: 12, other: 11 }
  - { type: IntegerGreater, actual: "12", other: 11, cast_actual_to: int }
```

### IntegerGreaterOrEqual

Checks if `actual` is of integer type and the value `actual` contains is greater than or equal to the value of `other`.

```yml
asserts:
  - { type: IntegerGreaterOrEqual, actual: 12, other: 12 }
  - { type: IntegerGreaterOrEqual, actual: 15, other: 12 }
  - {
      type: IntegerGreaterOrEqual,
      actual: "16",
      other: 15,
      cast_actual_to: int,
    }
```

### IntegerLess

Checks if `actual` is of integer type and the value `actual` contains is less than the value of `other`.

```yml
asserts:
  - { type: IntegerLess, actual: 5, other: 11 }
  - { type: IntegerLess, actual: "12", other: 13, cast_actual_to: int }
```

### IntegerLessOrEqual

Checks if `actual` is of integer type and the value `actual` contains is less than or equal to the value of `other`.

```yml
asserts:
  - { type: IntegerLessOrEqual, actual: 12, other: 12 }
  - { type: IntegerLessOrEqual, actual: 5, other: 11 }
  - { type: IntegerLessOrEqual, actual: "12", other: 15, cast_actual_to: int }
```

### Float

Checks if `actual` is of floating point type.

```yml
asserts:
  - { type: Float, actual: 10.0 }
  - { type: Float, actual: -10.00000000001 }
```

### FloatBetween

Checks if `actual` is of floating point type and the `actual` contains value in between the value of `min` and `max`.

```yml
asserts:
  - { type: FloatBetween, actual: 12.34, min: 11.5, max: 12.5 }
  - { type: FloatBetween, actual: 12.5, min: 11, max: 13 }
  - {
      type: FloatBetween,
      actual: "12.24",
      min: 11,
      max: 13,
      cast_actual_to: float,
    }
```

### FloatGreater

Checks if `actual` is of floating point type and the value `actual` contains is greater than the value of `other`.

```yml
asserts:
  - { type: FloatGreater, actual: 12.01, other: 12.001 }
  - { type: FloatGreater, actual: 12.01, other: 12 }
  - { type: FloatGreater, actual: "13.24", other: 13, cast_actual_to: float }
```

### FloatGreaterOrEqual

Checks if `actual` is of floating point type and the value `actual` contains is greater than or equal to the value of `other`.

```yml
asserts:
  - { type: FloatGreaterOrEqual, actual: 12.0, other: 12.0 }
  - { type: FloatGreaterOrEqual, actual: 12.01, other: 12 }
  - {
      type: FloatGreaterOrEqual,
      actual: "16.56",
      other: 15,
      cast_actual_to: float,
    }
```

### FloatLess

Checks if `actual` is of floating point type and the value `actual` contains is less than the value of `other`.

```yml
asserts:
  - { type: FloatLess, actual: 5.0, other: 11.0 }
  - { type: FloatLess, actual: "12.3", other: 13.3, cast_actual_to: float }
```

### FloatLessOrEqual

Checks if `actual` is of floating point type and the value `actual` contains is less than or equal to the value of `other`.

```yml
asserts:
  - { type: FloatLessOrEqual, actual: 12.0, other: 12 }
  - { type: FloatLessOrEqual, actual: 5.0, other: 11 }
  - {
      type: FloatLessOrEqual,
      actual: "12.23",
      other: 15.7,
      cast_actual_to: float,
    }
```

## String

### Str

Checks if `actual` is of type string.

```yml
asserts:
  - { type: Str, actual: "23" }
  - { type: Str, actual: "" }
```

### StrHave

Checks if `actual` is of type string and `actual` contains value of `other`.

```yml
asserts:
  - { type: StrHave, actual: "https://someurl.com", other: "someurl" }
  - { type: StrHave, actual: '{"a": 1, "b": 2}', other: '"b":' }
  - { type: StrHave, actual: '{"a": 1, "b": 2}', other: '{"a": 1}' }
```

### StrDoNotHave

Checks if `actual` is of type string and `actual` do not contains value of `other`.

```yml
asserts:
  - { type: StrDoNotHave, actual: "https://someurl.com", other: "someurl-" }
  - { type: StrDoNotHave, actual: '{"a": 1, "b": 2}', other: '"c":' }
```

### StrStartsWith

Checks if `actual` is of type string and `actual` starts with value of `other`.

```yml
asserts:
  - { type: StrStartsWith, actual: "https://someurl.com", other: "http" }
  - { type: StrStartsWith, actual: '{"a": 1, "b": 2}', other: '{"a"' }
```

### StrDoNotStartsWith

Checks if `actual` is of type string and `actual` do not starts with value of `other`.

```yml
asserts:
  - { type: StrDoNotStartsWith, actual: "https://someurl.com", other: ".com" }
  - { type: StrDoNotStartsWith, actual: '{"a": 1, "b": 2}', other: '"b":' }
```

### StrEndsWith

Checks if `actual` is of type string and `actual` ends with value of `other`.

```yml
asserts:
  - { type: StrEndsWith, actual: "https://someurl.com", other: ".com" }
  - { type: StrEndsWith, actual: '{"a": 1, "b": 2}', other: '": 2}' }
```

### StrDoNotEndsWith

Checks if `actual` is of type string and `actual` do not ends with value of `other`.

```yml
asserts:
  - { type: StrDoNotEndsWith, actual: "https://someurl.com", other: "https" }
  - { type: StrDoNotEndsWith, actual: '{"a": 1, "b": 2}', other: '"b":' }
```

## Date

### Date

Checks if `actual` is of type date and have given `format`.

```yml
asserts:
  - { type: Date, actual: "1972-07-30", format: "%Y-%m-%d" }
  - { type: Date, actual: "1972-30-07", format: "%Y-%d-%m" }
```

### DateAfter

Checks if `actual` is of type date and have given `format`, also the date is after the `expected` date.

```yml
asserts:
  - {
      type: DateAfter,
      actual: "1972-07-20",
      expected: "1972-07-29",
      format: "%Y-%m-%d",
    }
  - { type: DateAfter, actual: "1972-07", expected: "1972-06", format: "%Y-%m" }
```

### DateAfter

Checks if `actual` is of type date and have given `format`, also the date is after the `expected` date.

```yml
asserts:
  - {
      type: DateAfter,
      actual: "1972-07-20",
      expected: "1972-07-29",
      format: "%Y-%m-%d",
    }
  - { type: DateAfter, actual: "1972-07", expected: "1972-06", format: "%Y-%m" }
```

### DateAfterOrEqual

Checks if `actual` is of type date and have given `format`, also the date is after or equal to the `expected` date.

```yml
asserts:
  - {
      type: DateAfter,
      actual: "1972-07-20",
      expected: "1972-07-29",
      format: "%Y-%m-%d",
    }
  - { type: DateAfter, actual: "1972-07", expected: "1972-06", format: "%Y-%m" }
```

### DateBefore

Checks if `actual` is of type date and have given `format`, also the date is before the `expected` date.

```yml
asserts:
  - {
      type: DateBefore,
      actual: "1972-30-06",
      expected: "1972-30-07",
      format: "%Y-%d-%m",
    }
  - {
      type: DateBefore,
      actual: "1972-07-20",
      expected: "1972-07-29",
      format: "%Y-%m-%d",
    }
  - {
      type: DateBefore,
      actual: "1972-07",
      expected: "1972-06",
      format: "%Y-%m",
    }
```

### DateBeforeOrEqual

Checks if `actual` is of type date and have given `format`, also the date is before or equal to the `expected` date.

```yml
asserts:
  - {
      type: DateBeforeOrEqual,
      actual: "1972-07-30",
      expected: "1972-07-30",
      format: "%Y-%m-%d",
    }
  - {
      type: DateBeforeOrEqual,
      actual: "1972-06-30",
      expected: "1972-07-30",
      format: "%Y-%m-%d",
    }
  - {
      type: DateBeforeOrEqual,
      actual: "1972-07",
      expected: "1972-07",
      format: "%Y-%m",
    }
```

## List

:::info

`cast_actual_to` will convert all items on the list to the given datatype.

:::

### List

Checks if `actual` is of type list.

```yml
asserts:
  - { type: List, actual: "[1, 2, 3]", cast_actual_to: list }
  - { type: List, actual: [1, 2, 3] }
  - { type: List, actual: [1, "2", 3.0] }
```

### ListContains

Checks if `actual` is of type list and it contains value from `expected`.

```yml
asserts:
  - {
      type: ListContains,
      actual: "[1, 2, 3]",
      expected: 2,
      cast_actual_to: list,
    }
  - { type: ListContains, actual: [1, 2, 3], expected: 3 }
  - { type: ListContains, actual: [1, "2", 3.0], expected: 4 }
```

### ListDoNotContains

Checks if `actual` is of type list and it does not contains value from `expected`.

```yml
asserts:
  - {
      type: ListDoNotContains,
      actual: "[1, 2, 3]",
      expected: 3,
      cast_actual_to: list,
    }
  - { type: ListDoNotContains, actual: [1, 2, 3], expected: 3 }
  - { type: ListDoNotContains, actual: [1, "2", 3.0], expected: 2 }
  - { type: ListDoNotContains, actual: [1, "2", 3.0], expected: "2" }
```

### ListHasIndex

Checks if `actual` is of type list and it contains index number given in `expected`.

```yml
asserts:
  - { type: ListHasIndex, actual: "[1, 2, 3]", index: 2, cast_actual_to: list }
  - { type: ListHasIndex, actual: [1, 2, 3], index: 3 }
  - { type: ListHasIndex, actual: [1, "2", 3.0], index: 4 }
```

### ListDoNotHasIndex

Checks if `actual` is of type list and it does not contains index number given in `expected`.

```yml
asserts:
  - {
      type: ListDoNotContains,
      actual: "[1, 2, 3]",
      expected: 2,
      cast_actual_to: list,
    }
  - { type: ListDoNotContains, actual: [1, 2, 3], expected: 2 }
  - { type: ListDoNotContains, actual: [1, "2", 3.0], expected: 2 }
```

## Map [Dictionary / HashMap]

:::info

`cast_actual_to` will convert all items on the list to the given datatype.

:::

### Map

Checks if `actual` is of type map.

```yml
asserts:
  - { type: Map, actual: "{ 'a': 1, 'b': 2 }", cast_actual_to: map }
  - { type: Map, actual: { "a": 1, "b": 2 } }
```

### MapKeyCount

Checks if `actual` is of type map, and the map have given number of keys.

```yml
asserts:
  - { type: MapKeyCount, actual: { "a": 1, "b": 2 }, expected: 2 }
```

### MapHasKeys

Checks if `actual` is of type map, and the map have the given keys. The assertion will pass even though it contain other keys as well.

```yml
asserts:
  - type: MapHasKeys,
    actual: { "address": "1 address", "name": "Some One", "Zone": "Tri gone" },
    expected: ["address", "name"],

  - { type: MapHasKeys, actual: { "a": 1, "b": 2 }, expected: ["b"] }
```

### MapDoNotHasKeys

Checks if `actual` is of type map, and the map do not have the given keys.

```yml
asserts:
  - type: MapDoNotHasKeys,
    actual: { "address": "1 address", "name": "Some One", "Zone": "Tri gone" },
    expected: ["address1", "lastName"],

  - { type: MapDoNotHasKeys, actual: { "a": 1, "b": 2 }, expected: ["c"] }
```

### MapExactKeys

Checks if `actual` is of type map, and the map exactly have the given keys.

```yml
asserts:
  - type: MapExactKeys,
    actual: { "address": "1 address", "name": "Some One" },
    expected: ["address", "name"],

  - { type: MapExactKeys, actual: { "a": 1, "b": 2 }, expected: ["a", "b"] }
```

## Miscellaneous

### Count

Checks if `actual` contains a sizeable and wether it have the given `expected` count.

```yml
asserts:
  - { type: Count, actual: { "a": 1, "b": 2 }, expected: 2 }
  - { type: Count, actual: { "a", "b", "c", "d" }, expected: 4 }
  - { type: Count, actual: "abcd", expected: 4 }
  - { type: Count, actual: 1, expected: 1 }
```
