# Facebook Client - Technical Test 
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard) ![](https://travis-ci.org/jampies/FacebookClient_TechTest.svg?branch=master)

A simple facebook client with filtering capabilities

Travis CI: https://travis-ci.org/jampies/FacebookClient_TechTest

## Dependencies

* Node v8+ and NPM

## Starting it up

* `npm install` to install any other necessary dependencies
* `npm start` will start up webpack dev-server and run locally at port `8080`
* `npm test` runs the unit tests
* `npm run ss` checks the project for any linting issues according to the semistandardjs spec (https://github.com/standard/semistandard)
* `npm run ss:fix` Attempts to automatically fix and linting issues, and highlights the rest.

## Conventions

* Tests are located in the same folder as the component tested and has `.spec.js` extensions

## Known issues

* Facebook api sometimes throws an error on init about incorrect version specified, causing it to load forever. Can be fixed with a page refresh.
* `react-masonry-layout` sometimes renders elements over each other, but not always. Not sure why yet.
* It cannot be deployed without setting up HTTPS as facebook api won't allow requests from http sources (besides localhost)

## License
MIT
