---
title: Setup
---

## User installation guide

This section describe the process on installation when you intent to use **chkware**. 

### chkware toolset installation


The currently supported python version is **_Python 3.10.x_** You need to have this version of python in your OS to continue any of the following steps.


**Method 1: with pipx**

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standard pypi python application manager.

First, [Install pipx](https://pypa.github.io/pipx/installation/). Then run

```bash
$ pipx install chk
```

Then use as following

```bash
$ chk http some_file.chk
```

**Method 2: with pip (globally)**

Alternatively you can install with `pip` like other regular python package following these step. However, it will install the package globally.

```bash
$ python3 -m pip install -U chk
```

Then use as following

```bash
$ chk http some_file.chk
```

**Method 3: with pip (locally)**

To install under a separate environment, that don't change your global package space. You should install under a virtual environment.

```bash
$ python3 -m venv .venv # create virtual environemnt
$ source .venv/bin/activate # active virtual environemnt
$ pip install -U chk
```

Then use as following

```bash
$ chk http some_file.chk
```

**Method 4: with pip (locally) from git**

To install latest version or a specific version from source code, under a separate environment, that don't change your global package space. Try following:

```bash
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -U https://github.com/chkware/cli/archive/main.tar.gz
```

Then use as following

```bash
$ chk http some_file.chk
```

Read more about this process in [‘pip install’ From a Git Repository](https://adamj.eu/tech/2019/03/11/pip-install-from-a-git-repository/)

---

### chkware toolset upgrade

If you have installed with **pipx** then use following to upgrade to latest released version.

```bash
$ pipx upgrade chk
```

Otherwise, if **pip** was used to install then same process given above should work for upgrade as well.

---
### chkware IDE extension installation

**chkware** will have your favorite IDE / editor integration so that it is easy for you to write `.chk` files. We are currently actively developing a Visual Studio Code extension. We will update this section with usage, once it's released.

[TBD]