---
title: Concepts
---

This page describes some key concepts before you use **`chkware`**.

There are two parts to **`chkware`** tool.

1. The command line tool `chk`, that you can run. `chk` supported sub-commands are listed below.
2. The specification files those contains configuration in _YAML based dsl_. These files have extension `.chk`.

### Supported sub-commands

- `chk http [--result] [FILE].chk`
  > Purpose of this sub command is to run a spec. file written in format supported by [http spec. file](http-reference). After you execute this command `chk` should make request by given request format, and display the response. You can also customize the response with `request`.`result` key.

  - `--result` <small>***optional***</small>: When you put this option, the you'll see only the result.
  - `[FILE].chk` <small>***required***</small>: File that you want to execute. See below for details.

### Specification files

Test specification files are written in YAML, having file extension `.chk`. So, before you start writing any specification file, you should have a proper introduction to YAML, if you do not have already. Here is a fine [YAML cheatsheet](https://quickref.me/yaml) to grasp some knowledge. We are using this specific extension (`.chk`) so these files do not make you confuse in typical project layout.

> In the future evolution path of **chkware** we are going to introduce more and more specification options and specification types and versions.

- [Http specification file](http-reference)