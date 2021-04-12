/**
 * Application bootstrap module
 * @namespace Init
 */

import * as Dom from './utils/dom';
import * as Data from './utils/data';
import getQueryParamValue from './utils/query';

/* Application entrypoint */
const init = () => {
  /* eslint-disable no-console */
  console.log('Prisma Media - Clients list filter app');
  Dom.generateTitle();
  // Fetch exhaustive clients list
  Data.getList().then((datas) => {
    const clients = Data.extractClients(datas);
    /* eslint-disable no-console */
    console.log(clients);
    // Apply filter on eyeColor if necessary
    const eyeColorParam = getQueryParamValue('eyeColor');
    /* eslint-disable no-console */
    console.log(eyeColorParam);
    // Apply filter on age if necessary
    const ageRangeParam = getQueryParamValue('ageRange');
    /* eslint-disable no-console */
    console.log(ageRangeParam);
  });
};

init();
