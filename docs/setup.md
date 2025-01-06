---
title: Setup CHKware cli
---

This section describe the installation process for [_CHKware_](https://github.com/chkware/cli). The currently supported python version is **_Python 3.13.x_**. You need to have this version of python in your OS to continue.

### Install dependencies

- [**_Python 3.13.x_**](https://www.python.org/downloads/)

### Install _CHKware_ cli with Pipx

:::info
Pipx is a standard PyPi python application manager. Pipx creates separate virtual environment for given installable package. So, your system have less side effect.
:::

The best way is to setup CHKware with [pipx](https://pipx.pypa.io/stable/). Follow the steps:

1. [Setup Pipx](https://pipx.pypa.io/stable/installation/).
2. Run in console

  ```shell
  pipx install chk
  ```

### Install _CHKware_ cli with Pip

:::info
If you have _Python 3.13.x_ installed, then you already have `pip` installed by default.
:::
:::info
It is **RECOMMENDED** to use a virtual environment when using via `pip`.

For windows users, please follow [**this nice article**](https://realpython.com/python-virtual-environments-a-primer/) to create and use virtual environment.
:::
:::warning
`python` command below assumes it's 3.13.x version. Based on OS it also can be `py`, `python3` or `python3.13` based on the package manager that was used to install.
:::

1. Create python virtual environment.
  
  ```shell
  # On Linux and macOS
  python -m venv ~/.chkware_global/

  # On Windows
  python -m venv C:\.chkware_global
  ```

2. Activate virtual environment.

  ```shell
  # On Linux and macOS
  source ~/.chkware_global/bin/activate

  # On Windows, In cmd.exe
  C:\.chkware_global\Scripts\activate.bat

  # On Windows, In PowerShell
  C:\.chkware_global\Scripts\Activate.ps1
  ```

3. Install CHKware cli in the virtual environment.

  ```shell
  pip install -U chk
  ```

  > To upgrade to the next released version, run the same command.

### Update _CHKware_ cli

- If CHkware was installed with _pipx_ then to upgrade to latest released version.

  ```shell
  pipx upgrade chk
  ```

- If CHkware was installed with _pip_ then to upgrade to latest released version follow [Install _CHKware_ cli with Pip](#install-chkware-cli-with-pip) step 2 and step 3.

---

### Install edge version of _CHKware_ cli [Advance users]

You can always install a tagged version directly from git

With Pipx

```shell
# latest dev release
pipx install git+https://github.com/chkware/cli.git@main

# or a tagged version
pipx install git+https://github.com/chkware/cli.git@v0.5.0
```

With Pip

:::warning
Make sure you activated virtual environment before doing this.
:::


```shell
# latest dev release
pip install -U git+https://github.com/chkware/cli.git@main

# or a tagged version
pip install -U git+https://github.com/chkware/cli.git@v0.5.0
```
