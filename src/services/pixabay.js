import axios from 'axios';
const API_KEY = '39011501-5171506c9db8b64cf4fbb065c';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async params => {
  const res = axios.get('', {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      key: API_KEY,
      ...params,
    },
  });
  return res;
};
