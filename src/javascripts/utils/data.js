/* eslint-disable arrow-parens */
export default function getClients() {
  /* eslint-disable no-console */
  console.log('getClients');
  return fetch('datas.json').then(response => response.json());
}
