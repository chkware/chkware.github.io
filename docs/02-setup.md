---
title: Setup
---

### Installation


The currently supported python version is **_Python 3.10.x_** You need to have this version of python in your OS to continue any of the following steps.


**Method 1: with pipx**

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standred pypi python application manager.

First, [Install pipx](https://pypa.github.io/pipx/installation/). Then run

```bash
$ pipx install chk
```

Then use as following

```bash
$ chk http SomeFile.chk
```

**Method 2: with pip (globally)**

Alternatively you can install with `pip` like other regular python package following these step. However, it will install the package globally.

```bash
$ python3 -m pip install -U pip # upgrade pip
$ python3 -m pip install -U chk
```

Then use as following

```bash
$ python3 -m chk http SomeFile.chk
```

**Method 3: with pip (locally)**

To install under a seperate environment, that don't change your global package space. Install under a virtual env.

```bash
$ python3 -m venv .venv # create virtual environemnt
$ source .venv/bin/activate # active virtual environemnt
$ pip install -U pip # upgrade pip
$ pip install -U chk
```

Then use as following

```bash
$ source .venv/bin/activate
$ python -m chk http SomeFile.chk
```

---

### Upgrade

If you have installed with **pipx** then use following to upgrade to latest released version.

```bash
$ pipx upgrade chk
```

Otherwise, if **pip** was used to install then same process given above should work for upgrade as well.
