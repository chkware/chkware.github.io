---
title: Quick Start
hide_title: true
---

To quickly start, let's try something live online.. [REQ|RES](https://reqres.in) is a hosted demo REST api service. Let's call a simple API endpoint from here.

> First [setup chkware](setup).

Go to https://reqres.in, and find there is an endpoint like **_GET_ SINGLE USER** we'll call this API with Chkware. So, follow these steps:

1. Create a file called `User.chk`.
2. Put following content

```yaml
---
request:
  url: https://reqres.in/api/users/2
  method: GET
```

3. from terminal run following

```bash
$ chk User.chk
```

See the output like

```text
HTTP/1.1 200 OK
Date: Sat, 29 Jan 2022 16:46:26 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
...truncated-headers...
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400

{'data': {'id': 2, 'email': 'janet.weaver@reqres.in', 'first_name': 'Janet', 'last_name': 'Weaver', 'avatar': 'https://reqres.in/img/faces/2-image.jpg'}, 'support': {'url': 'https://reqres.in/#support-heading', 'text': 'To keep ReqRes free, contributions towards server costs are appreciated!'}}
```

:wink::tada::confetti_ball:

---

Now let's try a more complex API. Let's call COVID-19 data from RapidAPI. You can call this api for any country with a two letter country code. Let's do the following to fetch covid-19 data for Bangladesh:

1. Register or login to https://rapidapi.com
2. Subscribe to https://rapidapi.com/Gramzivi/api/covid-19-data/ this source.
3. Create a directory called `~/project` and `covid-19.chk` in it
4. Now open `covid-19.chk` file and add following data

```yaml
---
request:
  url: https://covid-19-data.p.rapidapi.com/report/country/code
  url_params:
    code: bd
    date: '2020-04-01'
  method: GET
  headers:
    X-RapidAPI-Host: 'covid-19-data.p.rapidapi.com'
    X-RapidAPI-Key: '<your X-RapidAPI-Key>'
```

1. hit enter writing following command on terminal

```bash
$ cd ~/project
$ chk covid-19.chk
```

1. You'll get output like this

```text
HTTP/1.1 200 OK
Cache-Control: no-cache, private
Content-Type: application/json
Date: Sun, 23 Jan 2022 04:28:35 GMT
ETag: "69236d0ee4cbd7e37314028f0a8b01be"
Server: RapidAPI-1.2.8
Vary: Accept
X-RapidAPI-Region: AWS - ap-southeast-1
X-RapidAPI-Version: 1.2.8
X-RateLimit-Requests-Limit: 50000
X-RateLimit-Requests-Remaining: 49988
X-RateLimit-Requests-Reset: 2175151
Content-Length: 182
Connection: keep-alive

[{'country': 'Bangladesh', 'provinces': [{'province': 'Bangladesh', 'confirmed': 54, 'recovered': 25, 'deaths': 6, 'active': 23}], 'latitude': 23.684994, 'longitude': 90.356331, 'date': '2020-04-01'}]
```

:wink::tada::confetti_ball:

You just fetch a live API. Going further, you should save these `.chk` files in git repo, so that you can run it later, from anywhere where **chkware** is installed. Cheers.
