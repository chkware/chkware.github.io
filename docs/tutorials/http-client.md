---
title: Use as HTTP client
---

:::note

* **Prerequisite**: [Setup **CHKware**](/docs/setup)
* All [`fetch` examples](/docs/examples/http-examples)

:::

*CHKware* can be used as a scriptable HTTP client. To see an example, let's call the [*XKCD.com JSON API*](https://xkcd.com/json.html) that returns a joke for a given ID.

Follow these steps:

* Create a file called `xkcd-joke.chk` in any of your workspace

* Open `xkcd-joke.chk` file in a code editor and add following spec. That is all you need to do a minimal HTTP GET request.
  
  See notes section for more fetch example.

  ```yaml
  ---
  version: default:http:0.7.2
  request:
    url: https://xkcd.com/614/info.0.json
    method: GET
  expose:
    - <% _response %>
  ```

* Now open a terminal and write the following command.

  ```bash
  chk fetch xkcd-joke.chk
  ```

  You'll get output like following. Data will vary depending on the day you are doing it.

  ```bash
  HTTP/1.1 200 OK

  Connection: keep-alive
  Content-Length: 654
  Server: nginx
  Content-Type: application/json
  ETag: W/"6749c25d-5ac"
  Expires: Sat, 30 Nov 2024 15:44:31 GMT
  Cache-Control: max-age=300
  Content-Encoding: gzip
  Accept-Ranges: bytes
  Age: 0
  Date: Sat, 30 Nov 2024 16:13:09 GMT
  Via: 1.1 varnish
  X-Served-By: cache-qpg120106-QPG
  X-Cache: HIT
  X-Cache-Hits: 0
  X-Timer: S1732983188.687830,VS0,VE2217
  Vary: Accept-Encoding

  {"month": "7", "num": 614, "link": "", "year": "2009", "news": "", "safe_title": "Woodpecker", "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", "img": "https://imgs.xkcd.com/comics/woodpecker.png", "title": "Woodpecker", "day": "24"}
  ```

  You just fetched a live API :rocket::star2:.

* These above response are coming as formatted output. If you want to see all JSON (headers, body, etc included) just pass the `--no-fomat` or `-nf` option flag.

  ```bash
  chk fetch -nf xkcd-joke.chk
  ```

  and response looks like this.

  ```bash
  [{"code": 200, "info": "HTTP/1.1 200 OK", "headers": {"Connection": "keep-alive", "Content-Length": "654", "Server": "nginx", "Content-Type": "application/json", "ETag": "W/\"6749c25d-5ac\"", "Expires": "Sat, 30 Nov 2024 15:44:31 GMT", "Cache-Control": "max-age=300", "Content-Encoding": "gzip", "Accept-Ranges": "bytes", "Age": "0", "Date": "Sat, 30 Nov 2024 16:31:03 GMT", "Via": "1.1 varnish", "X-Served-By": "cache-qpg1237-QPG", "X-Cache": "HIT", "X-Cache-Hits": "0", "X-Timer": "S1732984262.328702,VS0,VE690", "Vary": "Accept-Encoding"}, "body": {"month": "7", "num": 614, "link": "", "year": "2009", "news": "", "safe_title": "Woodpecker", "transcript": "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}", "alt": "If you don't have an extension cord I can get that too.  Because we're friends!  Right?", "img": "https://imgs.xkcd.com/comics/woodpecker.png", "title": "Woodpecker", "day": "24"}}]
  ```

:wink::tada::confetti\_ball:
