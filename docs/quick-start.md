---
title: Quick Start
---

:::warning

Prerequisite: [Setup **CHKware**](/docs/setup) to continue

:::

### A real business story

DummyJSON service a JSON response faker for API. Let's think of a business case based on the [listed APIs](https://dummyjson.com/docs).

#### Business scenario:

User should be able to add a post on DummyJSON service.

#### Test cases:

Suppose our webapp have a page to add a new post. This page also shows some user information. Let's imagine the API test workflow for this page.

1. User is able to login. API response have a bearer *access_token*.
2. User is able to get *self* or *me* URL to show user information on page.
3. User is able to create a post using that bearer *access_token*.

### Test implementation

To implement the above test cases we need to be able to fetch an API response. Fetch multiple different APIs in a flow. Let's do in with *CHKware*.

#### Prepare for the project.

- Create a directory in anywhere in your system and give it a meaningful name.
- Now open the console terminal where `chk` command is install. Follow setup steps if it hasn't been done already.
- Go to the directory in console using
```shell
cd [DIRECTORY]
```

#### Login to get bearer *access_token*

- Create a file called `req-login.chk`. File name has not special significance. Open `req-login.chk` file, and add following:

```yaml
---
version: default:http:0.7.2

request:
  url: https://dummyjson.com/user/login
  method: POST

  body[json]:
    username: emilys
    password: emilyspass
    expiresInMins: 30

expose:
  - <% _response %>
```

<details>
  <summary>Explanation</summary>

  This file is called *HTTP specification* or *HTTP spec* file in *CHKware*. This file holds configuration to call an URL.
  
  With `request:` node, we define what to request, and with `expose:` section we mention what to return. In this case the HTTP response body that was received.

  It is possible to use *HTTP spec* as a scriptable HTTP client.
</details>

#### Get user's info with bearer *access_token*

- Create a file called `req-user-me.chk`. File name has not special significance. Open `req-user-me.chk` file, and add following:

```yaml
---
version: default:http:0.7.2

variables:
  AccessToken: ~

request:
  url: https://dummyjson.com/user/me
  method: GET

  auth[bearer]:
    token: <% AccessToken %>

expose:
  - <% _response %>
```

<details>
  <summary>Explanation</summary>

  With this *HTTP specification* we are requesting `user/me` URL with `GET`. We are passing `bearer` auth token with the request.

  This spec. have a `variables:` node, an special way to define variables that works for this file context only. We are setting a variable called `AccessToken` with default `null`. We are using that variable in `request.auth[bearer].token`.
</details>

#### Create a post using bearer *access_token*

- Create a file called `req-post-create.chk`. File name has not special significance. Open `req-post-create.chk` file, and add following:

```yaml
---
version: default:http:0.7.2

variables:
  AccessToken: ~

request:
  url: https://dummyjson.com/posts/add
  method: POST

  auth[bearer]:
    token: <% AccessToken %>

  body[json]:
    title: "I am in love with someone."
    userId: 5

expose:
  - <% _response %>
```

<details>
  <summary>Explanation</summary>

  With this *HTTP specification* we are requesting `posts/add` URL with `POST`. We are passing `bearer` auth token with the request.

  This spec. have a `body[json]:` node. This is used to pass json data to server. This automatically adds `'application/json'` type header to the request. we are sending post title and a user id in json body.
</details>

#### Create the test workflow

- Create a file called `wf-user-post-create.chk`. File name has not special significance. Open `wf-user-post-create.chk` file, and add following:

```yaml
---
version: default:workflow:0.8.0

tasks:
  - name: Login with user's credential
    uses: fetch
    file: "./req-login.chk"

  - name: Get user's me
    uses: fetch
    file: "./req-user-me.chk"
    variables:
      AccessToken: <% _steps.0._response.body.accessToken %>

  - name: Create a post
    uses: fetch
    file: "./req-post-create.chk"
    variables:
      AccessToken: <% _steps.0._response.body.accessToken %>

expose:
  - <% _steps %>
```

<details>
  <summary>Explanation</summary>

  This file is called *Workflow specification* or *Workflow spec* file in *CHKware*. This file holds configuration to a chkware workflow. Use *Workflow specification* to make workflow using other CHKware sub commands as tasks. As you can see in the example.

  With this *Workflow specification* we are making workflow of all the tasks we created above. Here we define which task to execute after one another. Tasks are zero (0) indexed.
  
  We are passing `AccessToken` variable we got from step 0 after login to other tasks. This overwrites default values given in those corresponding files.

  Finally, we are exposing `_steps` for to show response.
</details>

##### Run the test workflow

To run the workflow write in the console and hit *Enter*:

```shell
$ chk workflow [PATH-TO-DIR]/wf-user-post-create.chk


Workflow:
Steps total: 3, failed: 0
------
+ [PASS] Task: Login with user's credential
>> POST https://dummyjson.com/user/login
------
+ [PASS] Task: Get user's me
>> GET https://dummyjson.com/user/me
------
+ [PASS] Task: Create a post
>> POST https://dummyjson.com/posts/add
```

<details>
  <summary>Explanation</summary>

  The workflow response shows how many task executed and how many of them failed (if any). with `+ [PASS]` is represents the passed tasks with a summary of what happened in that step.
</details>

That's basically it. Now,

- These files can be commit to git. 
- These files can be used by you or your teammate/s later to test the same workflow.
- This workflow also can be used in CI/CD for this test case automation.
