export function getList() {
  return fetch('datas.json').then((response) => response.json());
}

export function extractClients(list) {
  return list.map(({
    index, name, age, eyeColor, email, balance,
  }) => ({
    index, name, age, eyeColor, email, balance,
  }));
}
