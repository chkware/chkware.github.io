---
title: Build cli zipapp
---

CHKware `zipapp` is a self contained executable alike utility that once build can be used from anywhere. However, it have python version dependency.

Follow these steps to bundle `chkware` as [zipapp](https://docs.python.org/3/library/zipapp.html).

- Please confirm that [Python 3.13.x](https://www.python.org/downloads) is installed and setup on this machine

- Clone the repo

  ```bash
  git clone https://github.com/chkware/cli.git cli-zip
  ```

- Change to the directory

  ```bash
  cd cli-zip
  ```

- Make directory for local _virtualenv_ setup

  ```bash
  python -m venv .venv
  ```

- Switch to the _virtualenv_

  ```bash
  source .venv/bin/activate
  ```

  or on windows

  ```bash
  .venv/Scripts/activate.bat
  ```

- Install all required packages

  ```bash
  pip install -U -r requirements.txt
  ```

- Install shiv for building the zipapp

  ```bash
  pip install -U shiv
  ```

- Use the environment's python to build the zipapp. Refer to shiv [documentation](https://shiv.readthedocs.io/en/latest/#:~:text=let%E2%80%99s%20break%20this%20command%20down%2C) for further explanation.

  ```bash
  python -m shiv -c chk -o chk.pyz .
  ```

- `chk.pyz` is generated in the project folder. You can move it to anywhere on your machine, and put it on your machine's environment variable or `$PATH`. Then, use it as follows:

  ```bash
  chk.pyz http tests/resources/storage/sample_config/xkcd-joke.chk
  ```
