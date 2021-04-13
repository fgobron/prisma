/**
 * Application bootstrap module
 * @namespace Init
 */
import datas from '../datas.json';
import generateFilteredList from './prismaFilter';

/* Application entrypoint */
const init = () => {
  generateFilteredList(datas);
};

init();
