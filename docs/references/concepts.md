---
title: Concepts
---

This page describes some key concepts before you use **`CHKware`**.

There are two parts to **`CHKware`** tool.

1. The command line tool `chk`, that you can run. `chk` [supported sub-commands](#supported-sub-commands) are listed below.
2. The [specification files](#specification-files) those contains configuration in _YAML based dsl_. These files have extension `.chk`.

### Supported sub-commands

- `chk http [Options] [FILE].chk [VARIABLEn=VALUEn]`

  This sub command runs a file written in [HTTP specification file](http-spec) format.

  After you execute this command `chk` should make request by given request format, and display the response. You can also customize the response with `expose` key. see [usage](/docs/examples/http-examples#request-with-form) and [documentation](/docs/references/http-spec).

#### Options

- `--result, -r` <small>**_optional_**</small>: When you put this option, the you'll see only the result.
- `--no-format, -nf` <small>**_optional_**</small>: When you put this option, the result will not be formatter.

#### Arguments

- `[FILE].chk` <small>**_required_**</small>: File that you want to execute.
- `[VARIABLEn=VALUEn]` <small>**_optional_**</small>: Pass variables from command-line. format: _variableName1=value1_[space]_variableName2=value2_

---

- `chk testcase [Options] [FILE].chk`

  This sub command runs a file written in [validate specification file](validate-spec) format.

  After you execute this command `chk` should re-use `http` utility to request as per given structure on the file, execute test assertions, and display the result of the assertions. See [example](/docs/examples/validate-examples).

#### Options

- `--result, -r` <small>**_optional_**</small>: When you put this option, the you'll see only the result.
- `--no-format, -nf` <small>**_optional_**</small>: When you put this option, the result will not be formatter.

#### Arguments

- `[FILE].chk` <small>**_required_**</small>: File that you want to execute.
- `[VARIABLEn=VALUEn]` <small>**_optional_**</small>: Pass variables from command-line. format: _variableName1=value1_[space]_variableName2=value2_

### Specification files

Test specification files are written in YAML, having file extension `.chk`. So, before you start writing any specification file, you MUST have a proper knowledge of YAML, see [YAML cheatsheet](https://quickref.me/yaml). We are using this specific extension (`.chk`) so these files do not make you confuse in typical project layout.

> In the future evolution path of **CHKware** we are going to introduce more and more specification options and specification types and versions.

- [HTTP specification file](http-spec)
- [Validate specification file](validate-spec)
