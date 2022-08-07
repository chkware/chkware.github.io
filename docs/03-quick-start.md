---
title: Quick Start
---

**Prerequisite**: First [setup **chkware**](setup).

Let's call an API that returns current bitcoin price in USD. Please do following:

- Create a file called `bitcoin-usd.chk`
- Open `bitcoin-usd.chk` file, and add following data

  ```yaml
  ---
  version: default:http:0.7.2
  request:
    url: https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD
    method: GET
  ```

- Hit enter after writing following command on terminal

  ```bash
  $ chk http bitcoin-usd.chk
  ```

- You'll get output like following. Data will vary depending on the day you are doing it.

  ```bash
  File: bitcoin-usd.chk

  Executing request

  - Making request [Success]
  ====
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8
  Content-Length: 510
  Connection: keep-alive
  Date: Sun, 07 Aug 2022 06:05:23 GMT
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  ETag: W/"1fe-daabae46"
  X-Cache: Miss from cloudfront
  Via: 1.1 02d36a84a910749e0e01cf16e7e1a02a.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: SIN5-C1
  X-Amz-Cf-Id: es7o2_gllNtjITVD3QM3Y5EH3ASHfg1sjav2o5RSSJKH8Mo3Dv_8BA==

  {'coin': {'id': 'bitcoin', 'icon': 'https://static.coinstats.app/coins/1650455588819.png', 'name': 'Bitcoin', 'symbol': 'BTC', 'rank': 1, 'price': 22991.80131938709, 'priceBtc': 1, 'volume': 17847616879.01853, 'marketCap': 439482097425.5293, 'availableSupply': 19114731, 'totalSupply': 21000000, 'priceChange1h': 0.11, 'priceChange1d': -0.92, 'priceChange1w': -3.04, 'websiteUrl': 'http://www.bitcoin.org', 'twitterUrl': 'https://twitter.com/bitcoin', 'exp': ['https://blockchair.com/bitcoin/', 'https://btc.com/', 'https://btc.tokenview.com/']}}
  ```

- Now If you add `--result` flag to the command: it should show you the raw result output.

  ```bash
  $ chk http --result bitcoin-usd.chk
  HTTP/1.1 200 OK
  Content-Type: application/json; charset=utf-8
  Content-Length: 510
  Connection: keep-alive
  Date: Sun, 07 Aug 2022 06:10:39 GMT
  X-Powered-By: Express
  Access-Control-Allow-Origin: *
  ETag: W/"1fe-779b4c2b"
  X-Cache: Miss from cloudfront
  Via: 1.1 14193a789201b44415bebb86f9e5fe9c.cloudfront.net (CloudFront)
  X-Amz-Cf-Pop: SIN5-C1
  X-Amz-Cf-Id: IodB70Lc4gtw_oinJwEIQnzgu9q-HCW_OCVfiAzYUUgmlrJr9CaiGA==

  {'coin': {'id': 'bitcoin', 'icon': 'https://static.coinstats.app/coins/1650455588819.png', 'name': 'Bitcoin', 'symbol': 'BTC', 'rank': 1, 'price': 22981.487132414983, 'priceBtc': 1, 'volume': 17816663920.88816, 'marketCap': 439284944516.0738, 'availableSupply': 19114731, 'totalSupply': 21000000, 'priceChange1h': 0.03, 'priceChange1d': -0.9, 'priceChange1w': -3.09, 'websiteUrl': 'http://www.bitcoin.org', 'twitterUrl': 'https://twitter.com/bitcoin', 'exp': ['https://blockchair.com/bitcoin/', 'https://btc.com/', 'https://btc.tokenview.com/']}}
  ```

- If you open `bitcoin-usd.chk` change like following, you should only get the API response body.

  ```yaml
  ---
  version: default:http:0.7.2
  request:
    url: https://api.coinstats.app/public/v1/coins/bitcoin?currency=USD
    method: GET
    return: .body  # <-- to get body of response
  ```

  ```bash
  $ chk http --result bitcoin-usd.chk
  {'coin': {'id': 'bitcoin', 'icon': 'https://static.coinstats.app/coins/1650455588819.png', 'name': 'Bitcoin', 'symbol': 'BTC', 'rank': 1, 'price': 22981.487132414983, 'priceBtc': 1, 'volume': 17816663920.88816, 'marketCap': 439284944516.0738, 'availableSupply': 19114731, 'totalSupply': 21000000, 'priceChange1h': 0.03, 'priceChange1d': -0.9, 'priceChange1w': -3.09, 'websiteUrl': 'http://www.bitcoin.org', 'twitterUrl': 'https://twitter.com/bitcoin', 'exp': ['https://blockchair.com/bitcoin/', 'https://btc.com/', 'https://btc.tokenview.com/']}}
  ```

- now we will use `jq` json parser to get price data. [jq website](https://stedolan.github.io/jq/) here.

```bash
  $ chk http --result bitcoin-usd.chk | jq '.coin.price'
  22981.487132414983 # <-- depends on the current value
  ```
---
We just fetched a live API. You can use `chk http` as your scriptable http client like this :rocket::star2:.

Going further, you should save these `.chk` files in git repo, so that you can run it later, from anywhere where **chkware** is installed. Cheers.

:wink::tada::confetti_ball:
