---
title: Bitcoin API parser
---

:::note

- **Prerequisite**: First, [setup **CHKware**](/setup) to continue
- **Prerequisite**: Then, setup vscode extension for _CHKware_
- Find [more `http` examples](/examples/http-examples), and [more `testcase` examples](/examples/testcase-examples) here.

:::

Let's look into a simple automation scenario. This example shall give an idea of how CHKware, specifically the `chk` command, can be used as a part of automation to do the heavy lifting for an API automation process.

We will create an HTTP spec. doc that calls a bitcoin API. Then, we will write a Python script to parse the response of the API call.

:arrow_upper_right: [Code sample](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_flow/python)

#### 1. HTTP spec. doc for public bitcoin API

Please follow the below steps:

- Open vscode, then create and save a new file called `bitcoin-usd.chk`
  > You can name the file anything. For this example we'll assume the file is as above mentioned one.
- In the vscode command pallet start type: chkware. In the available command dropdown find `CHKware: Add Http spec. snippet`. Then select `http: Minimal request` from the next dropdown.
- Change the `url: ...` to look like following

  ```yml
  ...
  request:
    url: https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD
  ```

- Then add a `expose:` section to just expose the response body after request is successful.

  ```yml
  ...
  expose:
    - $_response.body
  ```

- Now the final file should look like this

    ```yml
    ---
    version: default:http:0.7.2
    request:
      url: https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD
      method: GET
    expose:
        - $_response.body
    ```

- Now again in the command pallet search and hit `CHKware: Run file` to see the response as output. :smiley:

#### 2. Write _Python_ script to parse response

We are going to parse the json output that gets printed after `chk http bitcoin-usd.chk` get run, in the _Python_ script. There are many ways to do this. But, using _Python_ core modules we can write as following.

> Scripting can also be done in any other programming language, such as _Javascript_, _Java_, _Kotlin_, etc.

```python
# bitcoin_sample_01.py

import subprocess
import json

# setup, run the file with `chk` and get response

file_path = "tests/resources/storage/sample_flow/python/bitcoin-usd.chk"
result = subprocess.check_output(["chk", "http", "--result", "--no-format", file_path])

# prepare and get bitcoin node in the response

output = json.loads(result.rstrip())
btc = output[0]['coin']

# to print current bitcoin price

print(f"BTC price now ${ btc['price'] }")
```

Run the script in the command line like

```sh
python bitcoin_sample_01.py
```

> ** Please create an github issue if you want to share your sample script included in the project.