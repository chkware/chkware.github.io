---
title: Setup toolbox
---

This section describe the installation process for [_CHKware_](https://github.com/chkware/cli). The currently supported python version is **_Python 3.11.x_**. You need to have this version of python in your OS to continue.

### Install _CHKware_ toolset with Pip

If you have _Python 3.11.x_ installed, then you already have `pip` installed by default. So, just run following command.

```bash
pip install -U chk
```

To upgrade to the next released version, run the same command.

:::note

- You can always install directly from git

  ```bash
  # to install latest stable version
  pip install -U git+https://github.com/chkware/cli@main

  # to install a tagged version, fx: v0.4.0
  pip install -U git+https://github.com/chkware/cli@v0.4.0
  ```

- It is recommended to [use a virtual environment](https://docs.python.org/3/library/venv.html#creating-virtual-environments) when using via `pip`.

:::

### Install _CHKware_ toolset with Pipx

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standard PyPi python application manager. Pipx creates separate virtual environment for given installable package. So, your system have less side effect.

First, [Install pipx](https://pypa.github.io/pipx/installation/). Then run

```bash
pipx install chk
```

**Update**

If you have installed with _pipx_ then use following to upgrade to latest released version.

```bash
pipx upgrade chk
```

Otherwise, if _pip_ was used to install then same process given above should work for upgrade as well.

Alternatively, chkware tool can be build and use as a zipapp, [following this instruction](/setup/build-zipapp).
