---
title: Quick Start
---

:::note

- **Prerequisite**: First, [setup **CHKware**](/setup) to continue
- Find [More `http` examples](/examples/http-examples) here
  :::

### Sample

Let's call an API that returns current bitcoin price in USD, and test it. Please do as following:

- Create a file called `bitcoin-usd-testcase.chk` in any of your workspace. This file name has not special significance. File name can be anything ending `.chk` extension.

  Open `bitcoin-usd-testcase.chk` file, and add following:

  ```yaml
  ---
  version: default:testcase:0.7.2
  request:
    url: https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD
    method: GET

  spec:
    asserts:
      - { type: AssertEqual, actual: $_response.code, expected: 200 }
      - { type: AssertIsInt, actual: $_response.body.coin.priceBtc }
  ```

- Hit enter after writing following command on terminal

  ```bash
  chk testcase bitcoin-usd-testcase.chk
  ```

  You'll get output like following. Data will vary depending on the day you are doing it.

  ```bash
  File: bitcoin-usd-testcase.chk

  - Making request [Success]
  - Process data for assertion [Success]
  - Prepare exposable [Success]

  ---
  -> Running `AssertEqual` on `$_response.code` [Success]
  -> Running `AssertIsInt` on `$_response.body.coin.priceBtc` [Success]
  ```

- Congratulation! You have just tested an API. :wink::tada::confetti_ball:

---

### Explanation

We call this `bitcoin-usd-testcase.chk` a spec or specification file. The content that you put was a [testcase specification](/references/testcase-reference).

Let us look into the content and see what we wrote.

On 1st line we wrote document version with `version:` same as we do on other config files i.e. terraform, ansible, etc. This is not all too important now.

On 2nd line, we wrote a `request:` block, which define how to sent the request to server. More on this block on [http specification](/references/http-reference).

Then we wrote a `asserts:` sub-section under `spec:` block which defines how to check the response those we received.

That's basically it. Find more [example specification](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_config) on the repository.
