---
title: Reference
---

:::note

- This page should be use as reference for specification files.
- This page is subject to change. It is requested to check this page frequently.

:::

This page describes some key concepts before you use **chkware**. There are two parts to this tool.

1. The command line tool that you can run as `chk http`
2. The test specification files: those you write in YAML, have extension `.chk`.

### Specification files

Test specification files are written in YAML, having file extension `.chk`. So, before you start writing any 
specs, you should have a proper introduction to YAML, if you do not have already. Here is a fine
[YAML cheatsheet](https://quickref.me/yaml) to grasp some knowledge. We are using this specific extension (`.chk`) 
so these files do not make you confuse in typical project layout.

> In the future evolution path of **chkware** we are going to introduce more and more specification 
> options and specification types and versions.


### Http specification

Let’s get introduced to the Http specification format supported by **chkware**. The Http specification 
format is how anyone express a Http request. Following is the full reference to write 
Http specification file.

```yaml
---
request:
  # valid URL
  url: https://httpbin.org/get

  # for query string or url parameters
  url_params:
    one: 1
    two: true

  # http method to use
  method: GET # or POST, PUT, PATCH, DELETE, OPTIONS, HEAD

  # send requst headers
  # add any numbers of headers
  # Causion: some values or keys need to be wrapped with single (') or double (") quote
  headers:
    User-Agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    'Accept-Encoding': 'gzip, deflate'
    accept: '*/*'

  # send authentication header.
  # two supported type: auth[bearer], auth[basic]:

  # auth[bearer] example
  auth[bearer]:
    token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

  # auth[basic] example
  auth[basic]:
    username: Some_USER
    password: 'Some-P@$$W03D'

  # send request body with the request

  # to send application/x-www-form-urlencoded form enctype
  body[form]:
    'var 1': 'var str 1'
    var-2: 'var str 2'
    # note: this will just pass filepath as value
    var_3: file:///home/username/.vimrc

  # to upload file as part of body use multipart/form-data like
  body[form-data]:
    'var 1': 'var str 1'
    var-2: 'var str 2'
    # note this will actually upload a file
    # we use file protocol (file://) scheme to identify a file
    var_3: file:///home/username/.vimrc
    var4: file:///home/username/Documents/CID-25601.IpPhone.rtf

  # to send plain text
  body[text]: 'Plain text here'

  # to pass as json to body pass a yaml object like
  body[json]: {
    user_id: 32, 
    roll_no: 1, 
    class: 2, 
    name: 'Student name' 
  }

  # to pass a xml as body use a yaml literal block
  body[xml]: |
    <?xml version="1.0"?>
    <catalog>
      <book id="bk101">
          <author>Gambardella, Matthew</author>
          <title>XML Developer's Guide</title>
          <genre>Computer</genre>
          <price>44.95</price>
          <publish_date>2000-10-01</publish_date>
          <description>An in-depth look at creating applications 
          with XML.</description>
      </book>
      <book id="bk102">
          <author>Ralls, Kim</author>
          <title>Midnight Rain</title>
          <genre>Fantasy</genre>
          <price>5.95</price>
          <publish_date>2000-12-16</publish_date>
          <description>A former architect battles corporate zombies, 
          an evil sorceress, and her own childhood to become queen 
          of the world.</description>
      </book>
    </catalog>
```
