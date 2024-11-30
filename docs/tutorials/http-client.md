---
title: Use as HTTP client
---

:::note

- **Prerequisite**: First, [setup **CHKware**](/docs/setup) to continue
- Find [more `http` examples](/docs/examples/http-examples) here

:::

Let's call the [_XKCD.com JSON API_](https://xkcd.com/json.html) that returns a joke for given ID. Please do as follows:

- Create a file called `xkcd-joke.chk` in any of your workspace
- Open `xkcd-joke.chk` file, and add following spec. That is all you need to do a minimal HTTP GET request. See [Http example](/docs/examples/http-examples) for other methods and types you can send with the requests.

  ```yaml
  ---
  version: default:http:0.7.2
  request:
    url: https://xkcd.com/614/info.0.json
    method: GET
  ```

  Here notice the `verison` string **`version: default:http:0.7.2`**, this is important for this specification to be a [http specification](/docs/references/http-reference).

- Open a terminal. Hit enter after writing following command on terminal.

  ```bash
  chk http xkcd-joke.chk
  ```

  You'll get output like following. Data will vary depending on the day you are doing it.

  ```bash
  File: xkcd-joke.chk

  - Making request [Success]
  - Prepare exposable [Success]

  ---
  HTTP/1.1 200 OK

  Connection: keep-alive
  Content-Length: 660
  Server: nginx
  Content-Type: application/json
  Last-Modified: Fri, 27 Jan 2023 12:54:53 GMT
  ETag: W/"63d3c99d-5ac"
  Expires: Sat, 28 Jan 2023 21:16:28 GMT
  Cache-Control: max-age=300
  Content-Encoding: gzip
  Via: 1.1 varnish, 1.1 varnish
  Accept-Ranges: bytes
  Date: Sun, 29 Jan 2023 06:02:09 GMT
  Age: 0
  X-Served-By: cache-dfw-kdfw8210071-DFW, cache-qpg1226-QPG
  X-Cache: HIT, HIT
  X-Cache-Hits: 1, 1
  X-Timer: S1674972129.844278,VS0,VE286
  Vary: Accept-Encoding

  {"month": "7", "num": 614, "link": "", "year": "2009", "news": "", "safe_title": "Woodpecker", "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", "img": "https://imgs.xkcd.com/comics/woodpecker.png", "title": "Woodpecker", "day": "24"}
  ```

  You just fetched a live API :rocket::star2:.

- Now If you add `--result` or `-r` flag to the command then it should show you the result in formatted output.

  ```bash
  chk http xkcd-joke.chk --result
  ```

  You should be able to see following if no exception occurs.

  ```bash
  HTTP/1.1 200 OK

  Connection: keep-alive
  Content-Length: 660
  Server: nginx
  Content-Type: application/json
  Last-Modified: Fri, 27 Jan 2023 12:54:53 GMT
  ETag: W/"63d3c99d-5ac"
  Expires: Sat, 28 Jan 2023 21:16:28 GMT
  Cache-Control: max-age=300
  Content-Encoding: gzip
  Via: 1.1 varnish, 1.1 varnish
  Accept-Ranges: bytes
  Date: Sun, 29 Jan 2023 06:02:09 GMT
  Age: 0
  X-Served-By: cache-dfw-kdfw8210071-DFW, cache-qpg1226-QPG
  X-Cache: HIT, HIT
  X-Cache-Hits: 1, 1
  X-Timer: S1674972129.844278,VS0,VE286
  Vary: Accept-Encoding

  {"month": "7", "num": 614, "link": "", "year": "2009", "news": "", "safe_title": "Woodpecker", "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", "img": "https://imgs.xkcd.com/comics/woodpecker.png", "title": "Woodpecker", "day": "24"}
  ```

- These above response are coming as formatted output. If you want to see all JSON (headers, body, etc included) just pass the `--no-fomat` or `-nf` option flag.

  ```bash
  chk http xkcd-joke.chk --result --no-format
  ```

  and response looks like this.

  ```bash
  [{"code": 200, "version": "HTTP/1.1", "reason": "OK", "headers": {"Connection": "keep-alive", "Content-Length": "660", "Server": "nginx", "Content-Type": "application/json", "Last-Modified": "Fri, 27 Jan 2023 12:54:53 GMT", "ETag": "W/\"63d3c99d-5ac\"", "Expires": "Sat, 28 Jan 2023 21:16:28 GMT", "Cache-Control": "max-age=300", "Content-Encoding": "gzip", "Via": "1.1 varnish, 1.1 varnish", "Accept-Ranges": "bytes", "Date": "Sun, 29 Jan 2023 06:13:14 GMT", "Age": "0", "X-Served-By": "cache-dfw-kdfw8210071-DFW, cache-qpg1267-QPG", "X-Cache": "HIT, HIT", "X-Cache-Hits": "1, 1", "X-Timer": "S1674972795.677591,VS0,VE316", "Vary": "Accept-Encoding"}, "body": {"month": "7", "num": 614, "link": "", "year": "2009", "news": "", "safe_title": "Woodpecker", "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", "img": "https://imgs.xkcd.com/comics/woodpecker.png", "title": "Woodpecker", "day": "24"}}]
  ```

---

This way you can use `chk http` as your script-able http client.

Next, let's write a feature test or [testcase](/docs/tutorials/feature-test) for this request.

:wink::tada::confetti_ball:
