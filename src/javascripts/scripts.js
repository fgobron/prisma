import * as Dom from './utils/dom';
import * as Data from './utils/data';

/* Application entrypoint */
const init = () => {
  /* eslint-disable no-console */
  console.log('Prisma Media - Clients list filter app');
  Dom.generateTitle();
  Data.getList().then((datas) => {
    const clients = Data.extractClients(datas);
    /* eslint-disable no-console */
    console.log(clients);
  });
};

init();
