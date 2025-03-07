---
title: Setup CHKware cli
---

This section describe the installation process for [_CHKware_](https://github.com/chkware/cli). The currently supported python version is **_Python 3.13.x_**. You need to have this version of python in your OS to continue.

### Install dependencies

- [**_Python 3.13.x_**](https://www.python.org/downloads/)

### Install _CHKware_ cli with `pipx`

:::info[about pipx]

`pipx` is a standard PyPI python application manager. `pipx` creates separate virtual environment for given installable package. So, your system have less side effect.

:::

The best way is to setup CHKware with [_pipx_](https://pipx.pypa.io/stable/). Follow the steps:

1. Setup `pipx`. [macOS guide](https://pipx.pypa.io/stable/installation/#on-macos), [linux guide](https://pipx.pypa.io/stable/installation/#on-linux), [windows guide](https://pipx.pypa.io/stable/installation/#on-windows)
2. Then install _CHKware_ with _pipx_.

```shell
pipx install chk
```

### Install _CHKware_ cli with Pip

::::warning[about python version]

**CHKware** require Python **3.13.x** version.

`pip` gets installed with Python. You should use [updated pip version](https://pip.pypa.io/en/stable/installation/#upgrading-pip).

:::note

`python` command should be automatically setup on install. Based on OS it also can be `py` (windows), `python3` or `python3.13` (macOS / Linux) based on the package manager that was used to install Python.

:::

:::tip[about virtual environment]

It is **RECOMMENDED** to use a virtual environment when using via `pip`.

For windows users, please follow [**this nice article**](https://realpython.com/python-virtual-environments-a-primer/) to create and use virtual environment.

:::

::::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="linux" label="Linux" default>
    1. Create python virtual environment.

    ```shell
    python3 -m venv ~/.chkware-venv/
    ```

    2. Activate virtual environment.

    ```shell
    source ~/.chkware-venv/bin/activate
    ```
  </TabItem>
  <TabItem value="macos" label="macOS">
    1. Create python virtual environment.

    ```shell
    python3 -m venv ~/.chkware-venv/
    ```

    2. Activate virtual environment.

    ```shell
    source ~/.chkware-venv/bin/activate
    ```
  </TabItem>
  <TabItem value="windows-cmd" label="Windows (cmd)">
    1. Create python virtual environment.

    ```shell
    py -m venv C:\.chkware-venv
    ```

    2. Activate virtual environment.

    ```shell
    C:\.chkware-venv\Scripts\activate.bat
    ```
  </TabItem>
  <TabItem value="windows-ps" label="Windows (Powershell)">
    1. Create python virtual environment.

    ```shell
    py -m venv C:\.chkware-venv
    ```

    2. Activate virtual environment.

    ```shell
    C:\.chkware-venv\Scripts\Activate.ps1
    ```
  </TabItem>
</Tabs>

3. Install CHKware cli in the virtual environment.

```shell
pip install -U chk
```

> To upgrade to the next released version, run the same command.

### Update _CHKware_ cli

#### pipx

If CHkware was installed with _pipx_ then to upgrade to latest released version.

```shell
pipx upgrade chk
```

#### pip

If CHkware was installed with _pip_ then to upgrade to latest released version.

:::info

[Activate the virtual environment](#install-chkware-cli-with-pip) from step 2 before running following command.

:::

```shell
pip install -U chk
```

---

### [Advance users] Install edge version of _CHKware_ cli

You can always install a tagged version directly from git

#### pipx

```shell
# latest dev release
pipx install git+https://github.com/chkware/cli.git@main

# or a tagged version
pipx install git+https://github.com/chkware/cli.git@v0.5.0
```

#### pip

:::info

[Create and activate the virtual environment](#install-chkware-cli-with-pip) before running following command.

:::

```shell
# latest dev release
pip install -U git+https://github.com/chkware/cli.git@main

# or a tagged version
pip install -U git+https://github.com/chkware/cli.git@v0.5.0
```
