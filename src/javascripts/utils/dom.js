export function generateTitle() {
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Prisma Media - Clients list filter');

  h1.appendChild(h1Text);
  document.body.appendChild(h1);
}

export function generateTable() {
  const table = document.createElement('table');
  document.body.appendChild(table);
}
