---
title: Console app v0.x changelog
---

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

Date: not-available

---

## 0.5.0 `beta`

Date: 2025-02-01

### Added

- Implement Jinja3 for variable value and filters [#338](https://github.com/chkware/cli/issues/338)
- Add new flag --data-input or -Di in validate module to get data from piped input [#337](https://github.com/chkware/cli/issues/337)
- Enable global option for debugging [#323](https://github.com/chkware/cli/issues/323)
- Chore: Python Dependency Manager and packaging process upgrade [#320](https://github.com/chkware/cli/issues/320)
- Add sub-command to run a specific workflow [#317](https://github.com/chkware/cli/issues/317)
- Workflow should point out the in step problems found - show error messages for broken steps [#314](https://github.com/chkware/cli/issues/314)
- Pass arguments to tasks and validate [#274](https://github.com/chkware/cli/issues/274)
- Pass arguments to tasks and validate [#274](https://github.com/chkware/cli/issues/274)
- State variables should be passed in between steps in workflow module [#272](https://github.com/chkware/cli/issues/272)
- Add support for state variables (for data produced in between steps) in workflow module [#271](https://github.com/chkware/cli/issues/271)
- Add support for variables in workflow module [#269](https://github.com/chkware/cli/issues/269)
- Add support for validate module in workflow module [#268](https://github.com/chkware/cli/issues/266)
- Create a base module for workflow [#266](https://github.com/chkware/cli/issues/266)
- Design spec for workflow [#265](https://github.com/chkware/cli/issues/265)
- Support for workflow [#264](https://github.com/chkware/cli/issues/264)
- [MODULE] Implement workflow module [#255](https://github.com/chkware/cli/issues/255)
- Use tag for fetch module auth and body [#251](https://github.com/chkware/cli/issues/251)
- Add message variables to assert [#219](https://github.com/chkware/cli/issues/219)
- load from .env file and set values to `_ENV` [#211](https://github.com/chkware/cli/issues/211)
- Add replaced value to `_assertion_result` items, and display in presentation [#210](https://github.com/chkware/cli/issues/210)
- By default all testcase should return `_assertion_result` and `_response` [#209](https://github.com/chkware/cli/issues/209)
- New assertions proposal [#199](https://github.com/chkware/cli/issues/199)
- Read from .env file [#193](https://github.com/chkware/cli/issues/193)

### Changed

- An error occurred inside a step, should not break the flow, the error should get reported instead. [#316](https://github.com/chkware/cli/issues/316)
- Coverage report broken [#283](https://github.com/chkware/cli/issues/283)
- Convert commad-line variables arguments from key=value to json [#221](https://github.com/chkware/cli/issues/221)
- Variables are not replaced in with statement #[217](https://github.com/chkware/cli/issues/217)
- Fix $ issue in expose [#215](https://github.com/chkware/cli/issues/215)
- Align variable usage [#207](https://github.com/chkware/cli/issues/207)
- Insecure Xml Parser [#201](https://github.com/chkware/cli/issues/201)

### Removed

- Remove `http` module
- Remove `testcase` module
- Remove `{$ .. }`

---

## 0.4.3 `alpha`

Date: 2023-03-09

### Added

- Add sample workflow scripts written in python [#196](https://github.com/chkware/cli/issues/196)
- Read from OS Env for variables [#192](https://github.com/chkware/cli/issues/192)
- Add support for variable pass from CLI context for testcase [#184](https://github.com/chkware/cli/issues/184)

### Changed

- Align variable useage [#270](https://github.com/chkware/cli/issues/270)
- Type gets changed on response JSON [#187](https://github.com/chkware/cli/issues/187)

---

## 0.4.2 `alpha`

Date: 2023-02-03

### Added

- Add `--no-format`, `-nf` to get data as prepared by expose [#180](https://github.com/chkware/cli/issues/180)
- Improved cross-patform cross-terminal output print [#177](https://github.com/chkware/cli/issues/177)
- Output valid json encodable output for results [#175](https://github.com/chkware/cli/issues/175)
- Support for short tag `-r` instead of `--result` [#174](https://github.com/chkware/cli/issues/174)
- Parse-able expose for testcase and http [#173](https://github.com/chkware/cli/issues/173)
- Pass values from callee using CLI args [#170](https://github.com/chkware/cli/issues/170)
- Pass values from callee using with statement [#168](https://github.com/chkware/cli/issues/168)
- Path resolution implementation for out-file testcase scenario [#164](https://github.com/chkware/cli/issues/164)
- Path resolution for out-file testcase scenario [#161](https://github.com/chkware/cli/issues/161)
- Path, and URL resolution for execute [#160](https://github.com/chkware/cli/issues/160)
- Out-file execution for testcase [#159](https://github.com/chkware/cli/issues/159)
- Add verbosibility to http sub command [#152](https://github.com/chkware/cli/issues/152)
- Specific http error handling for http spec [#150](https://github.com/chkware/cli/issues/150)
- Support for versioned functionality [#148](https://github.com/chkware/cli/issues/148)

### Changed

- Update get_symbol_table so that it returns mangled var namespace [#166](https://github.com/chkware/cli/issues/166)
- Virtual document based system process - architectural upgrade [#131](https://github.com/chkware/cli/issues/131)

### Removed

- Remove support for `request.return` [#173](https://github.com/chkware/cli/issues/173)

---

## 0.4.0 `alpha`

Date: 2022-09-07

### Added

- Build `zipapp` [#132](https://github.com/chkware/cli/issues/132)
- create a automated release system [#96](https://github.com/chkware/cli/issues/96)
- More Assert_x function needed in AssertionCase [#116](https://github.com/chkware/cli/issues/116)
- Test specification [#88](https://github.com/chkware/cli/issues/88)
- Formatted result output for `testcase` [#115](https://github.com/chkware/cli/issues/115)
- Handle dangling key for variable on variable replace [#112](https://github.com/chkware/cli/issues/112)

### Changed

- install_requires in the `setup.cfg` needs to be updated. [#136](https://github.com/chkware/cli/issues/136)
- Improve variables `replace_values` functionality [#127](https://github.com/chkware/cli/issues/127)

---

## 0.3.4 `alpha`

Date: 2022-08-08

### Added

- `test-spec` init - should extend upon `http` spec [#89](https://github.com/chkware/cli/issues/89)
- support for `return` part of response of `http` spec [#91](https://github.com/chkware/cli/issues/91)
- Formatted result output for request [#114](https://github.com/chkware/cli/issues/114)
- Formatted output should be able to suppress with `--result` [#113](https://github.com/chkware/cli/issues/113)

### Changed

- Refactor: HTTP module class finding and loading process [#110](https://github.com/chkware/cli/issues/110)
- implement `types.MappingProxyType` instead of `DotMap` [#103](https://github.com/chkware/cli/issues/103)
- Update wrong docstring of allowed_url method [#104](https://github.com/chkware/cli/issues/104)

### Removed

- minor modification on request data preparation [#121](https://github.com/chkware/cli/issues/121)
- chk http fails with massive python exception not understandable by user [#123](https://github.com/chkware/cli/issues/123)

---

## 0.3.2 `alpha`

Date: 2022-06-10

**BREAKING CHANGE** variable support added. can be used as `variables` in `http` specification files.

### Added

- http spec file: define variable and use in request [#78](https://github.com/chkware/cli/issues/78)

### Changed

- nested dict data not getting sent in `body[json]` [#84](https://github.com/chkware/cli/issues/84)
- variables can't be used in `request.url` [#92](https://github.com/chkware/cli/issues/92)

---

## 0.2.0 `alpha`

Date: 2022-03-31
Tracked milestone: [M.2022-03](https://github.com/chkware/cli/milestone/2)

**BREAKING CHANGE** use http files with `chk http FILE.chk`

### Added

- Improve error message on validation error [#34](https://github.com/chkware/cli/issues/34)
- HTTP module: load config class by version string on file [#68](https://github.com/chkware/cli/issues/68)
- Advance request spec. config file validation [#48](https://github.com/chkware/cli/issues/48)
- platform support for linux [#27](https://github.com/chkware/cli/issues/27)
- platform support for windows [#28](https://github.com/chkware/cli/issues/28)
- Figure out how to communicate with community [#19](https://github.com/chkware/cli/issues/19)
- Proof of concept for documentation [#47](https://github.com/chkware/cli/issues/47)

### Changed

- Remove `body[none]` from http file spec [#64](https://github.com/chkware/cli/issues/64)
- POST, PUT, PATCH methods must have at lease one `body[..` element [#39](https://github.com/chkware/cli/issues/39)
- Allow only one `body[..]` type in http specification file [#43](https://github.com/chkware/cli/issues/43)
- Allow only one `auth[..]` type in http specification file [#44](https://github.com/chkware/cli/issues/44)
- Architectural TLD [#4](https://github.com/chkware/cli/issues/4)
- `url:` must be valid URL (only http & https) [#49](https://github.com/chkware/cli/issues/49)
- Method should be one of allowed method [#50](https://github.com/chkware/cli/issues/50)

---

## 0.1.5 `pre-alpha`

Date: 2022-02-28
Tracked milestone: [M.2022-02](https://github.com/chkware/cli/milestone/1)

### Added

- validation for HTTP spec file [#29](https://github.com/chkware/cli/issues/29)
- validate request .chk file [#7](https://github.com/chkware/cli/issues/7)
- Find suitable libraries for going forward [#23](https://github.com/chkware/cli/issues/23)
- Ready for 1st pre-release [#14](https://github.com/chkware/cli/issues/14)
- preliminary documentation need [#12](https://github.com/chkware/cli/issues/12)

### Changed

- add support for request body for HEAD, OPTIONS http methods [#18](https://github.com/chkware/cli/issues/18)
- Improvement to docs for v0.1.5 [#36](https://github.com/chkware/cli/issues/36)

---

## 0.1.0 `pre-alpha`

Date: 2022-01-26

### Added

- POST, PUT, PATCH null body support
- form enctype multipart/form-data support
- form enctype application/x-www-form-urlencoded support
- for OPTIONS, HEAD method sending body disabled
- http method support for GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD
- Support request structure
- Ability to read `.chk` file
