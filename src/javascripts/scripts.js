/* eslint-disable arrow-parens */
import * as Dom from './utils/dom';
import getList from './utils/data';

/* Application entrypoint */
const init = () => {
  /* eslint-disable no-console */
  console.log('Prisma Media - Clients list filter app');
  Dom.generateTitle();
  getList().then(data => {
    /* eslint-disable no-console */
    console.log(data);
  });
};

init();
