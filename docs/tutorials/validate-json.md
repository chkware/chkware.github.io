---
title: Validate JSON
---

:::note

* **Prerequisite**: [Setup **CHKware**](/docs/setup)
* All [`validate` examples](/docs/examples/validate-examples)

:::

Let's validate the response we got from [*XKCD.com JSON API http client*](/docs/tutorials/http-client) to see whether we got the expected response. *CHKware* **validate** can be used to validate JSON response. 

Please do as follows:

* Create a new file called `xkcd-joke-validate.chk` on the same directory where your created `xkcd-joke.chk`.

* Open `xkcd-joke-validate.chk` file, and add following.

  ```yaml
  ---
  version: default:validate:0.7.2

  asserts:
    - { type: Equal, actual: "<% _data.0.code %>", expected: 200 }
    - { type: Integer, actual: "<% _data.0.body.num %>" }
    - { type: Equal, actual: "<% _data.0.body.year %>", expected: 2009 }

  expose:
    - <% _asserts_response %>
  ```

* Now open a terminal and write the following command.

  ```bash
  chk fetch -nf sample_specs/tutorials/xkcd-joke.chk | chk validate sample_specs/tutorials/xkcd-joke-validate.chk -Di
  ```

  **Output**

  ```bash
  Test run id: 3a46b0eb-9aa8-44b8-a568-9a0401d3cc8f, time taken 0:00:00.002257
  Total tests: 3, Total tests failed: 0

  > Test run result(s):
  + Equal PASSED, actual `int(200)` is equal to expected `int(200)`
  + Integer PASSED, actual `int(614)` is a integer value
  + Equal PASSED, actual `int(2009)` is equal to expected `int(2009)`
  ```

  You just tested a live API :rocket::star2:.

That's how easy to make API feature test. More [testcase examples](/docs/examples/validate-examples) here.

:wink::tada::confetti\_ball:
