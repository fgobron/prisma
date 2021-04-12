/**
 * Application bootstrap module
 * @namespace Init
 */

import * as Dom from './utils/dom';
import * as Data from './utils/data';
import parseQueryString from './utils/query';

/* Application entrypoint */
const init = () => {
  Dom.generateTitle();
  // Fetch exhaustive clients list
  Data.getList().then((datas) => {
    let clients = Data.extractClients(datas);
    // Browse parameters on the querystring
    parseQueryString(window.location.search).forEach((item) => {
      const key = item[0];
      const entry = item[1];
      switch (key) {
        case 'eyeColor':
          clients = Data.filterClientsBySimpleCriteria(clients, key, entry);
          break;
        case 'ageRange':
          clients = Data.filterClientsByRangeCriteria(clients, 'age', entry);
          break;
        default:
          // No filter
      }
    });
    /* eslint-disable no-console */
    console.log(clients);
  });
};

init();
