---
title: Console commands
---

**`CHKware`** console application `chk` command reference.

The `chk` command consists of few sub-commands. Following are the references of those sub-commands.

## The `chk` command

```shell
$ chk --help
Usage: chk [OPTIONS] COMMAND [ARGS]...

     █████████  █████   █████ █████   ████
    ███░░░░░███░░███   ░░███ ░░███   ███░
   ███     ░░░  ░███    ░███  ░███  ███    █████ ███ █████  ██████   ████████   ██████
  ░███          ░███████████  ░███████    ░░███ ░███░░███  ░░░░░███ ░░███░░███ ███░░███
  ░███          ░███░░░░░███  ░███░░███    ░███ ░███ ░███   ███████  ░███ ░░░ ░███████
  ░░███     ███ ░███    ░███  ░███ ░░███   ░░███████████   ███░░███  ░███     ░███░░░
   ░░█████████  █████   █████ █████ ░░████  ░░████░████   ░░████████ █████    ░░██████
    ░░░░░░░░░  ░░░░░   ░░░░░ ░░░░░   ░░░░    ░░░░ ░░░░     ░░░░░░░░ ░░░░░      ░░░░░░

  Low-code API quality testing, and automation toolbox.
  Version 0.5.0, supported version strings: 0.7.2

Options:
  --debug / --no-debug  Enable debug logging
  --help                Show this message and exit.

Commands:
  fetch     Command to run HTTP config files.
  validate  Command to run Validation specification files.
  workflow  Command to run Workflow specification files.
```

#### Options

- `--debug / --no-debug` <small>***optional***</small>: Set `--no-debug` if debug need to be disabled, this is enabled by default.
- `--help` <small>***optional***</small>: Shows help message.

### The `chk fetch` sub-command

```shell
Usage: chk fetch [OPTIONS] FILE

  Command to run HTTP config files.
  FILE: Any .chk, .yaml and .yml file, that has any of the following versions:

  - default.http.*

Options:
  -nf, --no-format      No formatting to show the output
  -V, --variables TEXT  Pass variable(s) as JSON object
  --help                Show this message and exit.
```

This sub command runs a file written in [HTTP specification file](http-spec) format.

#### Options

- `-nf, --no-format` <small>***optional***</small>: Format the result in JSON. Default formatted response.
- `-V, --variables TEXT` <small>***optional***</small>: Pass a JSON string containing variables and value to be used in the file.
- `--help` <small>***optional***</small>: Shows help message.

#### Arguments

- `FILE` <small>***optional***</small>: File to execute. Supports `.chk`, `.yaml` and `.yml` extensions of version `default.http.*`.

### The `chk validate` sub-command

```shell
Usage: chk validate [OPTIONS] FILE

  Command to run Validation specification files.
  FILE: Any .chk, .yaml and .yml file, that has any of the following versions:

  - default.validate.*

Options:
  -nf, --no-format      No formatting to show the output
  -V, --variables TEXT  Pass variable(s) as JSON object
  -D, --data TEXT       Pass data as JSON
  -Di, --data-in        Pass data as JSON [from pipe]
  --help                Show this message and exit.
```

This sub command runs a file written in [validate specification file](validate-spec) format.

#### Options

- `-nf, --no-format` <small>***optional***</small>: Format the result in JSON. Default formatted response.
- `-V, --variables TEXT` <small>***optional***</small>: Pass a JSON string containing variables and value to be used in the file.
- `-D, --data TEXT` <small>***optional***</small>: Pass values to be used as `_data` in the validate file.
- `-Di, --data-in` <small>***optional***</small>: Pass values from console pipe to be used as `_data` in the validate file.
- `--help` <small>***optional***</small>: Shows help message.

#### Arguments

- `FILE` <small>***optional***</small>: File to execute. Supports `.chk`, `.yaml` and `.yml` extensions of version `default.validate.*`.

### The `chk workflow` sub-command

```shell
Usage: chk workflow [OPTIONS] FILE

  Command to run Workflow specification files.
  FILE: Any .chk, .yaml and .yml file, that has any of the following versions:

  - default.workflow.*

Options:
  -nf, --no-format      No formatting to show the output
  -V, --variables TEXT  Pass variable(s) as JSON object
  --help                Show this message and exit.
```

This sub command runs a file written in [Workflow specification file](workflow-reference) format.

#### Options

- `-nf, --no-format` <small>***optional***</small>: Format the result in JSON. Default formatted response.
- `-V, --variables TEXT` <small>***optional***</small>: Pass a JSON string containing variables and value to be used in the file.
- `--help` <small>***optional***</small>: Shows help message.

#### Arguments

- `FILE` <small>***optional***</small>: File to execute. Supports `.chk`, `.yaml` and `.yml` extensions of version `default.workflow.*`.

### Specification files

Test specification files are written in YAML, having file extension `.chk`, `.yaml` or `.yml`. So, before you start writing any specification file, you MUST have a proper knowledge of YAML, see [YAML cheatsheet](https://quickref.me/yaml).

> In the future evolution path of **CHKware** we are going to introduce more and more specification options and specification types and versions.

- [HTTP specification file](http-spec)
- [Validate specification file](validate-spec)
- [Workflow specification file](workflow-reference)
