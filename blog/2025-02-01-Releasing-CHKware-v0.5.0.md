---
slug: releasing-chkware-v0.5.0
title: "Introducing CHKware v0.5.0: A Leap Forward in Streamlined API Testing"
authors: [0hsn]
tags: [release-notes]
---

After months of waiting, we’re excited to share **CHKware _v0.5.0_**, the newest version of our lightweight, developer-friendly tool for testing APIs. Since the last update in March 2023, we’ve been busy improving performance, adding new features, and listening to your feedback to make CHKware even better.

This isn’t just a small update—it’s a big step forward. Along with improvements to the core CLI tool, we’ve also updated the Visual Studio Code extension and added detailed documentation to help you get the most out of the new, more secure features.

If you’re new to CHKware, it’s an open-source tool that makes API testing simple. You can test endpoints, debug responses, and automate checks with minimal setup. It’s designed to be fast and easy to use, with a focus on YAML-based configuration and a command-line interface.

Version 0.5.0 is a major milestone, fixing common issues and adding features to make your work easier and more secure. Whether you’ve been using CHKware for a while or just getting started, this update is all about making your API testing smoother, safer, and more efficient.

Briefly, here are the changes those made to this release.

## Features

For console feature, we introduced a global debug feature. Which is enabled by default. Of course, we can disable the feature as well with `--no-debug` option.

Simplifying spec. file structure is another project we undertook for this release. The benefits are using more predictable YAML dsl. As part of the simplification process, we restructure asserts validates, workflow, etc spec. files node structure.

We have introduced more assertions for test cases in validate specs. See [_assert_ reference](../docs/references/assertions) for more.

Implementing secure coding practices were are priority on this release. We had to fix a lot of security issues were introduced by many CVE issues. However, we understand security is an never-ending endeavour. Therefore the commitment to make the code, spec. files, and other subsystems secure to use shall be on going from up. Of course, we need your help in this matter.

## Modules update

We introduced a new module called _fetch_, that replaces _HTTP_ module. Although, we maintained backward compatibility, therefore _fetch_ sub-command is able to run [_http spec._ file](../docs/examples/http-examples). This maintains 100% feature parity of previous module.

_Validate_ module introduced to replace _Testcase_ module. A new [spec. file structure](../docs/examples/validate-examples) is introduced with _Validate_ module.

With version 0.5.0, **CHKware** has a new sub-command and a module called _Workflow_. _Workflow_ module has a newly introduced [workflow spec. format](../docs/examples/workflow-examples). This module was introduced to glue together _HTTP_ and _Validate_. Workflow module works more like Github Actions, and it's YAML spec. is also follow familiar node structure.

We have modified _Variables_ module to accommodate more stability and use-cased for variable, with data manipulation and interpolation features as well. For first time, we have moved to using Jinja2 as underlying templating engine, from home-built one. Therefore, Jinja2 came with it's advantages like filters, global functions, control logics, etc.

As you have already know, we are removed _Fetch_ and _Testcase_ module starting 0.5.0 and onward.

See details [CHANGELOG](../docs/changelogs/cli) for specifics.