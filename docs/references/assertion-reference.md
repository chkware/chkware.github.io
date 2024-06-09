---
title: Assertion reference
---

:::note

- This page should be use as reference for asserts used in testcase specification files.
- This page is subject to change. It is requested to check this page frequently.
- Currently JSON response is only supported type for assertions.

:::

Assertions are integral part of [Testcase spec.](/docs/references/testcase-reference) Following are the assertion keys supported in most latest version of Testcase spec.

Assertions are used to validate data in testcase specification after http request execution has successfully returned the response.

It supports a list of assertions to be supplied. Each of the list item consists of assertion object. Assertion object have following components:

- `type` of assertion to be executed.
- `actual` what to assert, usually a local variable or one of it's node.
- `expected` what is expect value, for some `types` this is not required.

e.g.

```yaml
---
spec:
  asserts:
    - { type: AssertEqual, actual: "{$Response.code}", expected: 201 }

    - type: assertIsMap
      actual: "{$Response}"
```

## Assertions

Following are currently supported assertions. Variable or values supplied in the `actual` field must contain JSON.

[TBD] will support other data interchange format.

### AssertEqual

Checks if `actual` and `expected` is equal.

```yaml
spec:
  ...
  asserts:
    - {type: AssertEqual, actual: "{$Response.code}", expected: 201}
```

### AssertNotEqual

Checks if `actual` and `expected` is not equal.

```yaml
spec:
  ...
  asserts:
    - {type: AssertNotEqual, actual: "{$Response.code}", expected: 200}
```

### AssertEmpty

Checks if `actual` is empty.

```yaml
spec:
  ...
  asserts:
    - {type: AssertEmpty, actual: "{$Response.varOne}"}
```

### AssertFalse

Checks if `actual` is _False_.

```yaml
spec:
  ...
  asserts:
    - {type: AssertFalse, actual: "{$Response.var_2}"}
```

### AssertTrue

Checks if `actual` is _True_.

```yaml
spec:
  ...
  asserts:
    - {type: AssertTrue, actual: "{$Response.varOne}"}
```

### AssertIsInt

Checks if `actual` is of type integer.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsInt, actual: "{$Response.varOne}"}
```

### AssertIsString

Checks if `actual` is of type string.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsString, actual: "{$Response.varOne}"}
```

### AssertIsFloat

Checks if `actual` is of type floating point.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsFloat, actual: "{$Response.varOne}"}
```

### AssertIsBool

Checks if `actual` is of type boolean, meaning either _True_ or _False_.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsBool, actual: "{$Response.varOne}"}
```

### AssertCount

Checks if `actual` is countable, and have the number of elements given in `expected`. One particular use-case is to test short list of paginated items. Let's say a JSON node `articles` should contains a list of 5 items, then someone would write that as:

```yaml
spec:
  ...
  asserts:
    - type: AssertCount
      actual: "{$Response.articles}"
      expected: 5
```

`AssertCount` also can be use to check a JSON object have given number of keys, as well.

### AssertGreater

Checks if `actual` is only greater than `expected` value. Integer, floating point, decimal values can be compared.

```yaml
spec:
  ...
  asserts:
    - type: AssertGreater
      actual: "{$Price}"
      expected: 500
```

### AssertGreaterOrEqual

Checks if `actual` is greater than or equal to `expected` value. Integer, floating point, decimal values can be compared.

```yaml
spec:
  ...
  asserts:
    - type: AssertGreaterOrEqual
      actual: "{$Price}"
      expected: 500
```

### AssertLess

Checks if `actual` is only less than `expected` value. Integer, floating point, decimal values can be compared.

```yaml
spec:
  ...
  asserts:
    - type: AssertLess
      actual: "{$Price}"
      expected: 500
```

### AssertLessOrEqual

Checks if `actual` is less than or equal to `expected` value. Integer, floating point, decimal values can be compared.

```yaml
spec:
  ...
  asserts:
    - type: AssertLessOrEqual
      actual: "{$Price}"
      expected: 500
```

### AssertStrContains

Checks if data given in `actual` is a string. If so, does it contains the substring given in `expected`.

```yaml
spec:
  ...
  asserts:
    - type: AssertStrContains
      actual: "testing is great for code"
      expected: 'code'
```

### AssertIsList

Checks if `actual` is of type dictionary. Usually, JSON lists are list.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsList, actual: "{$Response}"}
```

### AssertListContains

Checks if data given in `actual` is a list. If so, does it contains the value given in `expected`.

```yaml
spec:
  ...
  asserts:
    - type: AssertListContains
      actual: "{$Countries}"
      expected: 'GB'

    - type: AssertListContains
      actual: "{$Currency}"
      expected: {"country": "GB", "currency": "GBP"}
```

### AssertListHasIndex

Checks if data given in `actual` is a list. If so, does it contains `expected` index.

```yaml
spec:
  ...
  asserts:
    - type: AssertListHasIndex
      actual: "{$Articles}"
      expected: 6
```

### AssertIsMap

Checks if `actual` is of type dictionary. Usually, JSON objects are dictionary.

```yaml
spec:
  ...
  asserts:
    - {type: AssertIsMap, actual: "{$Response}"}
```

### AssertMapContains

Checks if data given in `actual` is a JSON object or dictionary. If so, does it contains a value given in `expected`.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapContains, actual: "{$StudentObject}", expected: 10 }

    - type: AssertMapContains
      actual: "{$StudentObject}"
      expected: {'teacher': {'id': 11, 'name': 'Some one'}}
```

### AssertMapHasKey

Checks if data given in `actual` is a JSON object or dictionary. If so, does it contains a key given in `expected`.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapHasKey, actual: "{$StudentObject}", expected: 'name' }
```

### AssertMapDoNotHasKey

Checks if data given in `actual` is a JSON object or dictionary. If so, does it DOES NOT contains a key given in `expected`.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapDoNotHasKey, actual: "{$StudentObject}", expected: 'salary' }
```

### AssertMapKeyCount

Checks if data given in `actual` is a JSON object or dictionary. If so, does it have same number of keys given in `expected`.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapKeyCount, actual: "{$StudentObject}", expected: 10 }
```

### AssertMapHasKeys

Checks if data given in `actual` is a JSON object or dictionary. If so, does it contains all of keys given in `expected`. `expected` have to be a list of string.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapHasKeys, actual: "{$StudentObject}", expected: ['name', 'section', 'class'] }
```

### AssertMapDoNotHasKeys

Checks if data given in `actual` is a JSON object or dictionary. If so, it DOES NOT contains any of keys given in `expected`. `expected` have to be a list of string.

```yaml
spec:
  ...
  asserts:
    - { type: AssertMapDoNotHasKeys, actual: "{$StudentObject}", expected: ['salary', 'year_of_experience'] }
```

### AssertMapExactKeys

Checks if data given in `actual` is a JSON object or dictionary. If so, it only contains keys given in `expected`. `expected` have to be a list of string.

```yaml
spec:
  ...
  asserts:
    - type: AssertMapExactKeys
      actual: "{$StudentObject}"
      expected: ['name', 'section', 'class', 'class_teacher_id']
```
