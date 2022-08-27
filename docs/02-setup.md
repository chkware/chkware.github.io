---
title: Setup
---

### Install `chkware` toolset with Pipx

This section describe the installation process for [`chkware`](https://github.com/chkware/cli). The currently supported python version is **_Python 3.10.x_** You need to have this version of python in your OS to continue.

The best way to setup any python app is manage it via [pipx](https://pypa.github.io/pipx/). Pipx is a standard PyPi python application manager.

First, [Install pipx](https://pypa.github.io/pipx/installation/). Then run

```bash
$ pipx install chk
```

Then use as following

```bash
$ chk http some_file.chk
```

### `chkware` toolset upgrade

If you have installed with _pipx_ then use following to upgrade to latest released version.

```bash
$ pipx upgrade chk
```

Otherwise, if _pip_ was used to install then same process given above should work for upgrade as well.

---

### Install `chkware` extension for Visual Studio Code

Get started writing `chkware` configurations with VS Code in three steps:

- Step 1: If you haven't done so already, install [chkware](#install-chkware-toolset-with-pipx)

- Step 2: Install the `chkware` extension for VS Code

New to `chkwere`? Read the `chkware` [**quick start**](quick-start) guide here.

### Setup development environment for `chkware` extension

Make sure you are doing following to develop this extension further in your machine.

- Run `npm install` to install dependencies for the first time
- Run `npm run watch`
- Press `f5`
- Wait for the new window to be opened
- Open command palette by pressing `ctrl` + `shift` + `p`
- Search for `chkware` commands
- After code changes, run `Developer: Reload Window` in the new window from command palette
