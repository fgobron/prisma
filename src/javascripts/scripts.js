/**
 * Application bootstrap module
 * @namespace Init
 */
import generateFilteredList from 'prisma-filter/js/index';

/* Application entrypoint */
const init = () => {
  generateFilteredList();
};

init();
