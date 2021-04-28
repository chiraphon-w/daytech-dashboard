import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: '3f8c9df149a8554295a1d24272da4646',
  },
});
