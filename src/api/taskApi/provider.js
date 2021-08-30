/* import curr from '../../MOCK/mock_currencies'; */
import { converter } from './converter';

class TaskApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getTask() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => converter(data))
      .catch(console.log);

  /*   return converter(curr); */
  }
}

export default new TaskApi({ url: 'https://www.nbrb.by/api/exrates/rates?periodicity=0' });
