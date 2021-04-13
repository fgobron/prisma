# Globalis Prisma Test
Globalis Prisma recruitment test project powered by http://staticsiteboilerplate.com/

## Prerequisites
Successfully tested with

* node -v v10.16.0
* npm -v 6.9.0 (which comes bundled with Node)

## Installation

```bash
git clone https://github.com/fgobron/prisma.git
 ```

 ```bash
cd prisma
 ```

 ```bash
rm -rf .git
 ```

 ```bash
npm install
 ```

 ## Commands

 To run the local development server:
```bash
npm run start
 ```
Your default web browser should open and navigate to http://localhost:8000.

URL examples :

// brown eye color and age between 20 and 25 filters

<http://localhost:8000/?eyeColor=brown&ageRange=20-25>

// blue eye color and age between 26 and 30 filters

<http://localhost:8000/?eyeColor=blue&ageRange=26-30>



To run the local production server:
```bash
npm run start:dist
 ```

 To build a production-ready version:
 ```bash
npm run build:dist
 ```

To deploy, copy the entire contents of dist/ into your web server or for deploying via FTP,
after setting up config/site.deploy.js file, run :

 ```bash
npm run deploy
 ```

 ## Prisma filter module usage
 Must be implemented within a packager compliant with ES6 module support as Webpack+Babel

 1. Copy in your project directory **prismaFilter.js** script and subdirectories dependencies

 - utils/data.js
 - utils/dom.js
 - utils/query.js

2. Import main module as usual with intruction ``import generateFilteredList from './prismaFilter';``

3. Call **generateFilteredList** method with json datas as param after asynchronous fecthing or import.

## Browser Support

* Chrome _\(latest 2\)_
* Edge _\(latest 2\)_
* Firefox _\(latest 2\)_
* Internet Explorer 9+
* Opera _\(latest 2\)_
* Safari _\(latest 2\)_

## Author

**Frédéric GOBRON**

-   Website: <http://alternetdev.net/>

## License

The code is available under the [MIT license](LICENSE).
