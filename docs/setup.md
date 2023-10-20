---
title: Setup CHKware cli
---

This section describe the installation process for [_CHKware_](https://github.com/chkware/cli). The currently supported python version is **_Python 3.11.x_**. You need to have this version of python in your OS to continue.

### Install _CHKware_ cli with Pipx

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standard PyPi python application manager. Pipx creates separate virtual environment for given installable package. So, your system have less side effect.

First, [Install pipx](https://pypa.github.io/pipx/installation/). Then run

```bash
pipx install chk
```

### Install _CHKware_ cli with Pip

If you have _Python 3.11.x_ installed, then you already have `pip` installed by default. So, just do the following steps.

:::info

It is **RECOMMENDED** to [use a virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments) when using via `pip`.

- `python` command below assumes it's 3.11.x version. Based on OS it could be `py`, `python3` or `python3.11` based on the package manager that was used to install.

:::

:::note

For windows users, please follow [**this nice article**](https://realpython.com/python-virtual-environments-a-primer/) to create and use virtual environment.

:::

- Go to a directory of your choice.

  ```bash
  cd ~/your-chkware-dir/
  ```

- Create a virtual environment.

  ```bash
  python -m venv .venv
  ```

- Activate virtual environment.

  ```bash
  source .venv/bin/activate
  ```

- Install CHKware cli inside. To upgrade to the next released version, run the same command.

  ```bash
  pip install -U chk
  ```

  :::note

  You can always install a tagged version directly from git

  ```bash
  pip install -U git+https://github.com/chkware/cli@v0.5.0
  ```

  :::

**Update**

If you have installed with _pipx_ then use following to upgrade to latest released version.

```bash
pipx upgrade chk
```

Otherwise, if _pip_ was used to install then same process given above should work for upgrade as well.

Alternatively, chkware tool can be build and use as a zipapp, [following this instruction](/docs/setup/build-zipapp).
