---
title: Passing variables from Console
---

:::note

- **Prerequisite**: [Setup **CHKware**](/docs/setup)

:::

## Using with Fetch module

It is possible to customize a spec. or config's variable data while passing it from console in _CHKware_. We will use [XKCD](https://xkcd.com/) API for this tutorial.

Consider this following sample test config. Notice `<% JokeId %>` is written to be injected within the request URL.

```yaml [title="one-xkcd-joke.chk"]
---
version: default:http:0.7.2

request:
  url: https://xkcd.com/<% JokeId %>/info.0.json
  method: GET

expose:
  - <% _response %>
```

and run it as

```shell
chk fetch one-xkcd-joke.chk -V '{"JokeId": 614}'
```

_CHKware_ should return content for joke id 614, See, the content body have `"num": 614,` in it.

However, If we run this without passing the variable i.e. `-V '{"JokeId": 614}'` part. _CHKware_ should return a random joke. See the content body `"num": 614,` not in it. Rather, the server returns another joke.

:::info

I thing very important is, only JSON formatted string is supported with `-V, --variables` option.

:::

Keep in mind not all service API behave like this, rather the API response will throw exception when there is a default value not set.

However, setting default value is pretty easy with _CHKware_ specs. Updated code below.

```yaml [title="one-xkcd-joke.chk"]
---
version: default:http:0.7.2

variables:
  JokeId: 614

request:
  url: https://xkcd.com/<% JokeId %>/info.0.json
  method: GET

expose:
  - <% _response %>
```

Now if we run again without variable e.g.

```shell
chk fetch one-xkcd-joke.chk
```

The response should fetch data for joke id 614, in this case. However, when pass with variable, _CHKware_ should still get content for given id. i.e.

```shell
chk fetch one-xkcd-joke.chk -V '{"JokeId": 2004}'
```

With the above command run, _CHKware_ should return content for joke id 2004.

See [variable example](../examples/variable-examples.md) and [variable reference](../references/variables.md) for more.
