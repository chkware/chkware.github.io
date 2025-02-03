---
title: Website developer setup
---

### Local development environment setup for *CHKware* documentation site

[**chkware.github.io**](https://github.com/chkware/chkware.github.io/pulls) repository holds website source code https://chkware.com/.

### Installation

Clone the repo:

```sh
git clone https://github.com/chkware/chkware.github.io.git
cd chkware.github.io
```

Install dependencies:

```sh
npm i
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. You can also follow `http://localhost:3000/` URL in any browser.

Most changes are reflected live reload without having to restart the server.

### Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Guides

Learn how to contribute to this website.

We are using [Docusaurus](https://docusaurus.io/) for website, documentation and blog sections for now. Go to the site to find any documentation on Docusaurus.

### System requirements

- NodeJS `>=22.12.X`
