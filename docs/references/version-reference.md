---
title: Version specification reference
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.
  :::

### Introduction

**`important`** This node have to be available on each document.

The Version specification format is how someone write a document version. Usually we encourage user to write document version on the very top of a specification document, so that you don't miss it. However it can be written as a top-level key on any place of the document. This is how it looks like:

```yaml
version: default:http:0.7.2
```

Document version specifies which version of document current specification contents are written in. Simply think that, if someone wrote a document in a version that is not supported by the `chk` toolset currently installed: It will exit with an error. For example, if you run following in command-line:

```bash
$ chk
Usage: ...

  v0.4.0 | version strings: 0.7.2
...
```

- V0.4.0 is the tool version here
- 0.7.2 is the document version it supports

If you have a document that have `version: default:http:0.8.0`, then this command would not be able to run it.

### Format

This version string have 3 parts: `<plugin>:<module>:<number>`, e.g: `default:http:0.8.0`

- plugin: Name of the plugin that supports current specification. `default` means it part of core system. If you see other value it would mean you need to install that plugin to use the document.
- module: A plugin can install multiple module on registration. So, `http` is the module name in `chk http ..`. Usually these are registered as sub-commands to `chk`.
- number: the document version in [SEMVER](https://semver.org/) format.

### Support document versions:

    - 0.7.2
