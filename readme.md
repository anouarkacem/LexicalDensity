VAI Developer Test

You have been tasked to build an API where a user can query the complexity of a text. In the
first iteration your PM asked you to use lexical density. Please use NodeJs + Express (or
any of the more well known frameworks) to develop your API.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Start

```bash
$ npm start or nodemon
```

## Check Text Density

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"text":"Kim loves going to the cinema"}' \
  http://localhost:3000/complexity
```
## Create a non lexical word

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"word":"the"}' \
  http://localhost:3000/words
```