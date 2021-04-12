/**
 * Static helpers for fectching and manipulating data
 */

/**
 * fecth local datas
 * @returns {Object} promise
 */
export function getList() {
  return fetch('datas.json').then((response) => response.json());
}
/**
 * Extract useful subset of properties from raw datas
 * @param {Array} [list]
 * @returns {Array} Reduced list of properties as client entity
 */
export function extractClients(list) {
  return list.map(({
    index, name, age, eyeColor, email, balance,
  }) => ({
    index, name, age, eyeColor, email, balance,
  }));
}
