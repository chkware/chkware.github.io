---
title: Setup toolbox
---

### Install _CHKware_ toolset with Pipx

This section describe the installation process for [_CHKware_](https://github.com/chkware/cli). The currently supported python version is **_Python 3.11.x_**. You need to have this version of python in your OS to continue.

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standard PyPi python application manager.

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
