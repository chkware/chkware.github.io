---
title: Bitcoin API test
---

:::note

* **Prerequisite**: [Setup **CHKware**](/docs/setup)
* [Here are](#) the used code.

:::

Let's take a look into a simple business case. This example shows how *CHKware* can be used as a part of automation  process.

#### Plan

  1. We will create an *HTTP spec file* that call Coinstats API https://docs.api.coinstats.app/reference/get-coin-by-id. Please get your API key.
  2. We will write a *validation spec file* to validate the response of the API call.
  3. We'll combine both functionality in a *workflow spec file* to test the whole business testcase.

#### 1. HTTP spec. file for public bitcoin API

We will create an *HTTP spec file* in this step to call Coinstats bitcoin price conversion API.

Please follow the below steps:

* Open a code editor and create a new file called `bitcoin-usd-request.chk`

  > You can name the file anything. For this example we'll assume the file is as above mentioned one.

* Put the following content

  ```yml
  ---
  version: default:http:0.7.2

  request:
    url: https://openapiv1.coinstats.app/coins/bitcoin?currency=USD
    method: GET
    headers:
      "X-API-KEY": <% _ENV.COINSTATS_API_KEY %>

  expose:
    - <% _response %>
  ```

* Put API key in `"???"` below. In the console run following to see if it respond with success

  ```shell
  COINSTATS_API_KEY="???" chk fetch -nf bitcoin-usd.chk
  ```

* This should show successful response.

#### 2. Validation of HTTP response

In this step we'll create a file called `btc-usd-validate.chk` to validate response from the HTTP request we made for bitcoin API.

Please follow the below steps:

* Open a code editor and create a new file called `bitcoin-usd-validate.chk`.

* Put the following content.

  ```yml
  ---
  version: default:validate:0.7.2

  asserts:
    - { type: Equal, actual: <% _data.code %>, expected: 200, msg_pass: 'Response was successful with code `{type_actual}({value_actual})`' }
    - { type: Map, actual: <% _data.headers %>, msg_pass: 'Header is a list', msg_fail: 'Header is not a list' }
    - { type: Str, actual: <% _data.code %>, msg_pass: 'Code `{type_actual}({value_actual})` is a string', msg_fail: 'Code `{type_actual}({value_actual})` is not a string', cast_actual_to: int }
    - { type: StrHave, actual: <% _data.info %>, other: "200 OK" }
    - { type: Map, actual: <% _data.body %> }
    - { type: List, actual: <% _data.body.explorers %> }
    - { type: Float, actual: <% _data.body.price %> }
    - { type: MapHasKeys, actual: <% _data.body %>, expected: [ "price", "priceBtc", "priceChange1d", "priceChange1h", "priceChange1w" ] }

  expose:
    - <% _asserts_response %>
  ```

#### 3. Writing the business case test with workflow

In this section we'll prepare a testcase that combines those http spec and validation spec using a workflow spec file.

Please follow the below steps:

* Open a code editor and create a new file called `bitcoin-usd-workflow.chk`

* Put the following content

  ```yml
  ---
  version: default:workflow:0.8.0

  name: simple Btc workflow
  tasks:
    - name: Fetch some content from URL
      uses: fetch
      file: ./btc-usd-request.chk

    - name: Validate the content is okay
      uses: validate
      file: ./btc-usd-validate.chk
      arguments:
        data: <% _steps.0._response %>
  expose:
    - <% _steps %>
  ```

* Put API key in `"???"` below. In the console run following to see it respond with success

  ```shell
  $ COINSTATS_API_KEY="???" chk workflow sample_specs/tutorials/btc-usd-workflow.chk


  Workflow: simple Btc workflow
  Steps total: 2, failed: 1
  ------
  + [PASS] Task: Fetch some content from URL
  >> GET https://openapiv1.coinstats.app/coins/bitcoin?currency=USD
  ------
  - [FAIL] Task: Validate the content is okay
  >> Total tests: 8, Failed: 1
  >> With message: None
        >>> Code `int(200)` is not a string
  ```

It's possible to create workflow to satisfy business cases in combination of these tools. It takes very less time to develop those in this declarative approach.
