---
title: Console tool developer setup
---

### Local development environment setup for *CHKware* cli tool

Make sure you are doing following to develop `chk` cli tool in your machine.

#### Prerequisite:

- Install [Python 3.13.x](https://www.python.org/downloads/)

- Install [Poetry](https://python-poetry.org/docs/#installation)

- Install [Poetry dotenv plugin](https://pypi.org/project/poetry-dotenv-plugin/).

  ```shell
  poetry self add poetry-dotenv-plugin
  ```
 
- Install [Poetry 'Poe the Poet' plugin](https://poethepoet.natn.io/installation.html). Also get a good understanding on it.
  ```shell
  poetry self add 'poethepoet[poetry_plugin]'
  ```

#### Development setup

- Fork the `https://github.com/chkware/cli` repository

- Clone the repository

  ```shell
  git clone git@github.com:chkware/cli.git chkware-cli
  ```

- Create virtual environment and setup project
  ```shell
  poetry install --with test
  ```

That's all needed for development setup.

#### Development IDE setup

You should setup your IDE with [Ruff](https://docs.astral.sh/ruff/editors/setup/) and [Mypy](https://mon.school/courses/mypy-primer/learn/1.3).

### Run tests

We use PyTest as testing library. So, get your basic of understanding in it. We also use

#### Running specific test

  ```shell
  poetry run py.test -s tests/[FILE]::[TEST_CLASS]::[TEST_FUNC]
  ```

#### Running `chk` while development

  ```shell
  poetry run python -m chk [SUB_COMMAND] [OPTIONS] [SPEC_FILE]
  ```

### Common development tasks

#### Analyze linting and formatting issues

:::warning

Do this before doing merge request.

:::

Run following to analyze linting and formatting issues.

```shell
poetry poe fix
```

#### Build package

Run following to build packages to be uploaded to Pypi.

```shell
poetry build
```

:::note

Make sure to install the local package with `pipx` before Pypi release.

:::

#### Clear test run cache

Run following to clear test run cache.

```shell
poetry poe clear-cache
```

#### Create requirements for CI/CD

Run following to create requirements for CI/CD.

```shell
poetry poe requirements
```

#### Build `shiv` zipapp

:::warning

This was tested in macOS only. Although, it's expected to work in any environment.

:::

CHKware `zipapp` is a self contained executable like packaging of the software, that once build can be used from anywhere.

Follow these steps to bundle `chkware` as [zipapp](https://docs.python.org/3/library/zipapp.html).

```shell
poetry poe build-shiv
```
