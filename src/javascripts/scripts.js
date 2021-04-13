/* eslint-disable no-console */
/**
 * Application bootstrap module
 * @namespace Init
 */

import * as Dom from './utils/dom';
import * as Data from './utils/data';
import parseQueryString from './utils/query';
import datas from '../datas.json';

/* Application entrypoint */
const init = () => {
  Dom.generateTitle();
  // Extrac subSet clients list from exhaustive datas
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
  Dom.generateTable(clients);
};

init();
