/**
 * Static helpers methods for HTLM Elements generation
 */

/**
 * Main title generator
 */
function generateTitle() {
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Prisma Media - Clients list filter');

  h1.appendChild(h1Text);
  document.body.appendChild(h1);
}

/**
 * Main table data content generator
 */
function generateTable() {
  const table = document.createElement('table');
  document.body.appendChild(table);
}

export { generateTitle, generateTable };
