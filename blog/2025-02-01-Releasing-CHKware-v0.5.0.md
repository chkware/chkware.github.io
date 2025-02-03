---
slug: releasing-chkware-v0.5.0
title: "Introducing CHKware v0.5.0: A Leap Forward in Streamlined API Testing"
authors: [0hsn]
tags: [release-notes]
---

After months of waiting, we’re excited to share **CHKware _v0.5.0_**, the newest version of our lightweight, developer-friendly tool for testing APIs. Since the last update in March 2023, we’ve been busy improving performance, adding new features, and listening to your feedback to make CHKware even better.

<!-- truncate -->

This isn’t just a small update—it’s a big step forward. Along with improvements to the core CLI tool, we’ve also updated the Visual Studio Code extension and added detailed documentation to help you get the most out of the new, more secure features.

If you’re new to CHKware, it’s an open-source tool that makes API testing simple. You can test endpoints, debug responses, and automate checks with minimal setup. It’s designed to be fast and easy to use, with a focus on YAML-based configuration and a command-line interface.

Version 0.5.0 is a major milestone, fixing common issues and adding features to make your work easier and more secure. Whether you’ve been using CHKware for a while or just getting started, this update is all about making your API testing smoother, safer, and more efficient.

Here’s a quick rundown of what’s new in this release:

### Features

We’ve added a **global debug feature** to the console, which is turned on by default. If you don’t need it, you can easily disable it using the `--no-debug` option.

We also worked on simplifying the _spec file structure_ to make it more intuitive and predictable. This includes reorganizing nodes for asserts, validations, workflows, and more. The goal is to make your YAML files cleaner and easier to work with.

For test cases, we’ve added _more assertions_ to the validate specs. You can check out the full list of assertions in the [_assert_ reference](../docs/references/assertions).

Security was a big focus in this release. We fixed several vulnerabilities, including those related to CVE issues. But we know security is an ongoing effort, so we’re committed to keeping the code, spec files, and other subsystems as secure as possible. And of course, we’d love your help in spotting and reporting any issues!

### Modules Update

We’re introducing a new module called _fetch_, which replaces the old _HTTP_ module. Don’t worry — we’ve kept backward compatibility, so the _fetch_ sub-command can still run your existing [_http spec files_](../docs/examples/http-examples) without any changes. It also brings 100% feature parity with the previous module.

The _Validate_ module is here to replace the _Testcase_ module. It comes with a new [_spec file structure_](../docs/examples/validate-examples) that’s simpler and more powerful.

With v0.5.0, we’re excited to introduce a brand-new sub-command and module called _Workflow_. This module is designed to connect the _HTTP_ and _Validate_ modules seamlessly. Think of it like _GitHub Actions_ — it uses a YAML spec format that feels familiar and easy to use. Check out the [_workflow_ examples](../docs/examples/workflow-examples) to see it in action.

We’ve also updated the _Variables_ module to make it more stable and versatile. Now, it supports advanced data manipulation and interpolation features. Plus, we’ve switched to using **Jinja2** as the templating engine instead of our custom-built one. This brings a lot of benefits, like filters, global functions, and control logic, making your variable handling even more powerful.

As part of these changes, we’ve officially removed the _Fetch_ and _Testcase_ modules starting from v0.5.0.

Thanks for being with us. We'll keep you updated here. Cheers!

## Community

We are trying to be more connected to our user via conversation. Hence, we'll be using [_**Github discussions**_](https://github.com/orgs/chkware/discussions). Anyone is expected to ask any question, share their thoughts, ask for improvement on the discussion boards.

Please follow us on [_Twitter/X_](https://x.com/chkware).

---

See details [CHANGELOG](../docs/changelogs/cli) for specifics.
