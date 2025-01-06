---
title: About CHKware
---

![CHKware | Low-code API quality testing, and automation toolbox](./assets/github-hero-01.png)

**CHKware** (/check:ware/) is a low-code API testing tool and scriptable HTTP client, built for the API-driven era. It simplifies API test automation with minimal coding—fast, flexible, and tailored for modern needs.

**CHKware** is a command-line tool where you write test specifications using a YAML-based DSL.  

**Features:**  

- Reusable HTTP request and test specifications.  
- Structured, easy-to-maintain configurations.  

**Advantages:**  

- Minimal setup, faster test creation.  
- Simple reuse for consistent results.  

**Benefits:** Run your tests effortlessly and reuse test configurations to streamline API automation.

---

### Motivation

APIs power modern businesses, connecting web apps to services from multiple vendors. As integrations grow more complex, maintaining reliability becomes critical. That’s why you need smarter, modular API testing tools—built for today’s fast-evolving ecosystem.

API automation is essential, but existing tools are complex and require significant learning. Setting up and maintaining automated tests takes time and often demands programming expertise for customization. You need a faster, simpler solution—designed for effortless setup and minimal learning curves.

API testing tools are costly—not just in licensing but also in setup and maintenance. Free tools cover only basic use cases, while advanced features come with complex licensing and minimal community support. With fewer open-source alternatives, finding a scalable, affordable solution is harder than ever. That’s where an open, community-driven tool can fill the gap.

These limitations make existing tools less scalable for real-world use. Effective API testing requires:

- Mastery of specific programming languages, slowing onboarding.
- Managing a complex software stack increases the risks of side effects.
- Careful test code design upfront, or maintenance becomes a nightmare.

The result? Slower adoption and higher long-term costs. You need a solution that simplifies testing without the overhead.

It’s clear—the current state of API testing needs improvement. That’s why we created CHKware: a smarter, faster, and scalable solution designed to simplify API automation.

---

### Audiences

The focused users of **CHKware** are everyone involved in an API project, given they have some level of understanding of testing basics. If you

a. are a person with zero programming knowledge, and in need of a tool that does not get in your way,
b. need a tool that is relatively easy to write test cases,
c. and need a tool that is very easy to learn

Then CHKware is for you. 🙌

In practical cases, software testers, software quality assurance, developers, and PM / POs, are the people who should be able to use CHKware. This project is beneficial when

- you are developing an API-oriented project,
- writing website automation,
- also, seeding data or validating data.

---

### Platform support

This tool is tested to run on **Linux**, **Windows**, and **macOS** platforms.

There is no native binary dependency, therefore it is expected on all the platforms where the supported Python version works. Please create an issue, if you need additional platform support.

---

### Stability

`CHKware` is a tool collection. Followings are stability by tools:

| Command name   | Specification | Stability | Version   |
| -------------- | ------------- | --------- | --------- |
| `chk http`     | Http          | _alpha_   | < 0.5.0   |
| `chk testcase` | Testcase      | _alpha_   | < 0.5.0   |
| `chk fetch`    | Http          | _beta_    | >= 0.5.0  |
| `chk validate` | Testcase      | _beta_    | >= 0.5.0  |
| `chk workflow` | Testcase      | _beta_    | >= 0.5.0  |
