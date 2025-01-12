---
title: Pypi release process checklist
---

Follow the steps to do a manual release on PyPi.

- Make sure you followed the development setup steps up until [build package](/docs/setup/setup-cli-dev#build-package)

- Update version number on `pyproject.toml`

  ```ini
  version = 0.X.X
  ```

- Update version number on `chk/console/main.py`

  ```python
  """v0.X.X | supported version strings: 0.7.2, ..."""
  ```

- Update _docs/CHANGELOG.md_ with the release _0.X.X_ information

- Publish the package to PyPi will require your PyPi token.

  Setup with

  ```shell
  export POETRY_PYPI_TOKEN_PYPI="my-token"
  ```

  Then run

  ```bash
  poetry publish --build
  ```

- Publish and push an annotated tag

  ```bash
  git tag -a v0.X.X -m "..."
  git push -u origin v0.X.X
  ```

A new version is just released.
