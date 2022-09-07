---
title: Core concepts and usage
---

This page describes some key concepts before you use **`chkware`**.

There are two parts to **`chkware`** tool.

1. The command line tool `chk`, that you can run. `chk` [supported sub-commands](#supported-sub-commands) are listed below.
2. The [specification files](#specification-files) those contains configuration in _YAML based dsl_. These files have extension `.chk`.

### Supported sub-commands

- `chk http [--result] [FILE].chk`
  
  This sub command runs a file written in [http specification file](http-reference) format.
  
  After you execute this command `chk` should make request by given request format, and display the response. You can also customize the response with `request.result` key. see [usage](/examples/http-examples#request-with-form) and [documentation](/references/http-reference).

  **[Options]**
  - `--result` <small>***optional***</small>: When you put this option, the you'll see only the result.

  **[Arguments]**
  - `[FILE].chk` <small>***required***</small>: File that you want to execute.

- `chk testcase [FILE].chk`
  
  This sub command runs a file written in [testcase specification file](testcase-reference) format.
  
  After you execute this command `chk` should re-use `http` utility to request as per given structure on the file, execute test assertions, and display the result of the assertions. See [example](/examples/testcase-examples).

  **[Arguments]**
  - `[FILE].chk` <small>***required***</small>: File that you want to execute.

### Specification files

Test specification files are written in YAML, having file extension `.chk`. So, before you start writing any specification file, you MUST have a proper knowledge of YAML, see [YAML cheatsheet](https://quickref.me/yaml). We are using this specific extension (`.chk`) so these files do not make you confuse in typical project layout.

> In the future evolution path of **chkware** we are going to introduce more and more specification options and specification types and versions.

- [Http specification file](http-reference)
- [Testcase specification file](testcase-reference)
