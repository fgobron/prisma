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
    let clients = Data.extractClients(datas);
    /* eslint-disable no-console */
    console.log(clients);
    // Apply filter on eyeColor if necessary
    const eyeColorValue = getQueryParamValue('eyeColor');
    if (eyeColorValue !== null) {
      clients = Data.filterClientsBySimpleCriteria(clients, 'eyeColor', eyeColorValue);
      /* eslint-disable no-console */
      console.log(clients);
    }
    // Apply filter on age if necessary
    const ageRangeValue = getQueryParamValue('ageRange');
    if (ageRangeValue !== null) {
      clients = Data.filterClientsByRangeCriteria(clients, 'age', ageRangeValue);
      /* eslint-disable no-console */
      console.log(clients);
    }
  });
};

init();
