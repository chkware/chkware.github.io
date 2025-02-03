---
title: Document version
---

### Introduction

Each `.chk`, `.yaml` or `.yml` files containing *CHKware* YAML-dsl is a spec. or specification file. Each of these file **MUST** contain a YAML node called *version:*. E.g:

```yml
version: default:http:0.7.2
...
```

The version string contains a document version. Document version show which version of document current specification file is written in.

The `chk` tool will exit with an error when unsupported document version found.

It's encouraged for user to write document version on the very top of a spec. document, so that it's clearly visible. However it can be written as a top-level key on any place of the document.

Supported document version can be found on corresponding specification reference.

### Format

This version string have 3 parts: `<plugin>:<module>:<number>`, e.g: `default:http:0.8.0`

- plugin: Name of the plugin that supports current specification. `default` means it part of core system. If you see other value it would mean you need to install that plugin to use the document.

- module: A plugin can install multiple module on registration. So, `http` is a module name in *fetch* plugins.

- number: the document version in SEMVER format.
