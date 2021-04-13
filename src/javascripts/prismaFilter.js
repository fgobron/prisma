/**
 * @module prismaFilter
 * Prisma Clients filtering module
 * Generate table of filtered clients list
 */

import * as Dom from './utils/dom';
import * as Data from './utils/data';
import parseQueryString from './utils/query';

/**
 * get querystring param value
 * @param {Object[]} datas raw datas from json
 */
function generateFilteredList(datas) {
  Dom.generateTitle();
  // Extract subSet clients list from exhaustive datas
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
}

export default generateFilteredList;
