import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://carnet-json.herokuapp.com',
  });

  export default instance;