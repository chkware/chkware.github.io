---
title: Automate Chuck Norris jokes
---

In this automation example we are going to automate a simple workflow from [Chucknorris.io](https://api.chucknorris.io). Read more about the API on the site.

The workflow we are trying to automate is:

1. Get all the jokes categories
2. Get jokes by a given category, for all categories found on step 1.

The process we are going to follow:

1. Create a file called `joke_categories_rq.chk`; put a HTTP spec. doc that fetch all the joke categories.
2. Create a file called `joke_for_category_rq.chk`; put a HTTP spec. doc that fetch the jokes under a given category.
3. We'll write a _Python_ script that does following:
   1. Call the `joke_categories_rq.chk` using `chk` command, parse the response
   2. Prepare a list of all available jokes categories from the response, and randomly choose one category
   3. Call `joke_for_category_rq.chk` using `chk` command and pass the chosen category, and parse the response
   4. Print out some information found on response

:arrow_upper_right: [Code sample](https://github.com/chkware/cli/tree/main/tests/resources/storage/sample_flow/python/chucknorris_io)

#### 1. Fetch all the joke categories

- We'll begin with vscode. Just create a new file called `joke_categories_rq.chk`.
- In the vscode command pallet start type: chkware. In the available command dropdown find `CHKware: Add Http spec. snippet`. Then select `http: Minimal request` from the next dropdown.
- Change the `url: ...` so the file content looks like following. Then save the file.

  ```yml
  ---
  version: default:http:0.7.2
  request:
    url: https://api.chucknorris.io/jokes/categories
    method: GET
  ```

- In the vscode command pallet search and hit `CHKware: Run file` to see the response as output.

#### 2. Fetch jokes under a given category

- Now create a new file called `joke_for_category_rq.chk`.
- In the vscode command pallet start type: chkware. In the available command dropdown find `CHKware: Add Http spec. snippet`. Then select `http: Minimal request` from the next dropdown.

- We are going to change the `url: ...` so that we get jokes by category. Which is as following

  ```http
  https://api.chucknorris.io/jokes/random?category=category_name
  ```

  So, from the URL we can see that we can pass `category_name` as URL param or query string with `?category=`. To pass variable we need to define a `variables:` section on the spec.

  ```yml
  ---
  variables:
    category: "food"

  request:
    url: https://api.chucknorris.io/jokes/random?category={$category}
  ```

  The above `variables:` sections defines a variable called **`category`** with default value **"food"**. Then we use **`category`** variable's value in the URL with **`{$category}`**. So, if we don't pass any value to this file, then **"food"** will be used as default value. You will see below how you can pass value to this **`category`** variable from command-line.

  More docs on [passing query params](/docs/examples/http-examples#request-with-query-string) here

  Now the `joke_for_category_rq.chk` file should look like:

  ```yml
  ---
  version: default:http:0.7.2

  variables:
    category: "food"

  request:
    url: https://api.chucknorris.io/jokes/random?category={$category}
    method: GET
  ```

- In the vscode command pallet search and hit `CHKware: Run file` to see the response as output.

#### 3. Write _Python_ script to automate the workflow

We are going to parse the json output from `chk http joke_categories_rq.chk`, and `chk http joke_for_category_rq.chk` command run, in the _Python_ script. There are many ways to do this. But, using _Python_ core modules we can write as following.

> Scripting can also be done in any other programming language, such as _Javascript_, _Java_, _Kotlin_, etc.

```python
# get_random_jokes_for_category.py

import subprocess
import json
import random

# set spec. for list of all categories
joke_categories_f = (
    "tests/resources/storage/sample_flow/python/chucknorris_io/joke_categories_rq.chk"
)

# execute command and get response
result = subprocess.check_output(
    ["chk", "http", "--result", "--no-format", joke_categories_f]
)

# convert response to json
response = json.loads(result.rstrip())

# get response body, and get list of categories
categories = response[0]["body"]

# choose one random category
a_category = random.choice(categories)

# set random joke by for given category spec.
joke_for_category_f = (
    "tests/resources/storage/sample_flow/python/chucknorris_io/joke_for_category_rq.chk"
)

# execute command
# get response
# similar to run:
# chk http -r --nf chucknorris_io/joke_for_category_rq.chk category=a_category
result = subprocess.check_output(
    [
        "chk",
        "http",
        "--result",
        "--no-format",
        joke_for_category_f,
        f"category={ a_category }", # pass category value
    ]
)

# convert response to json
response = json.loads(result.rstrip())

# get joke from response body
joke = response[0]["body"]

# display the joke
print(
    "\n",
    f":: This joke {joke['id']} was created on {joke['created_at']} ::\n",
    f":: Permalink {joke['url']} ::\n",
    f"{joke['value']}\n",
    "\n",
)
```

Run the script in the command line like

```sh
python get_random_jokes_for_category.py
```

> \*\* Please create an github issue if you want to share your sample script included in the project.
