---
title: Setup for toolbox developer
---

### Local development environment setup for _CHKware_ cli toolbox

Make sure you are doing following to develop `chk` cli toolbox in your machine.

- Install [Python 3.11.x](https://www.python.org/downloads/)
  - You can use [Pyenv](https://github.com/pyenv/pyenv#installation) or [Conda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html) (using [Miniconda](https://docs.conda.io/en/latest/miniconda.html)) to manage multiple version of Python in your OS.
- Install [Pipenv](https://pipenv.pypa.io/en/latest/install/#installing-pipenv)
- Fork the `https://github.com/chkware/cli` repository
- Clone the repository
  ```bash
  git clone git@github.com:chkware/cli.git chkware-cli
  ```
- Create a `.venv` directory
  ```bash
  mkdir -p .venv
  ```
- Run the following command to install all the dependencies (including dev-dependencies)
  ```bash
  pipenv install --dev
  ```
- Use the following command to run tests
  ```bash
  pipenv run python -m pytest
  ```
- Use the following command to run a `http` spec file
  ```bash
  pipenv run python -m chk http /path/to/file.chk
  ```
- Setup your IDE with [Pylint](https://pylint.readthedocs.io/en/latest/user_guide/installation/ide_integration/index.html) and Mypy
