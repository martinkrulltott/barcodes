# Barcodes 1.0

A simple app to generate barcodes with a checksum digit.
Demo site: https://martinkrulltott.github.io/barcodes/

## Requirements

* Node.js
* NPM
* Vue CLI 3
* Google Chrome

## Installation

1. Clone the project (git clone {url})
2. Go to the project (cd barcodes)
3. Install the project package (npm i)
4. Install Vue CLI 3 if required (npm i -g @vue/cli)
5. Start Vue CLI (vue ui)

## Usage

1. In Vue CLI, go to Tasks -> Serve and click on Run task. Alt run commando 'npm run serve'
2. When Serve is running, click on Open app or go to http://localhost:8080/
3. The app is running in the browser, to simulate mobile devices, use "Device Toolbar" in Chrome devtools
4. The app can also be reached through the network using http://192.168.1.28:8080/

## Tests

* To test that the checksum value is calculcating correctly, run 'npm run test:unit'
* If the test fails for an unexpected reason, please run 'npx jest --clearCache', because of a Vue CLI bug

## Build & deploy

* To build for production, run 'npm run build'
* To deploy to Github Pages, run 'sh deploy.sh'