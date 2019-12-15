<h1 align="center">Welcome to GiveMeWinner 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

A simple API that allows you to select a random user from the comments under the video on YouTube.
The main goal of this project is practical study of Javascript and try working with Youtube API.

## Install

```sh
npm install
```

## Usage
Currently, the project presents a simple REST API which serve only a GET request and it sends a response
with a JSON object that represents information about YT profile(image, url, etc.).
So to start serving these request, you need to run app. You can do it with following command:

```sh
  npm start
```

After starting the app, you can go to the following address from the browser:
```
localhost:34567/pick/<youtubeVideoId>
```

OR just send GET request with specific URL

## Run tests

```sh
npm run test
```

## Author

👤 **k1-k0**

* Github: [@k1-k0](https://github.com/k1-k0)

## Show your support

Give a ⭐️ if this project helped you!