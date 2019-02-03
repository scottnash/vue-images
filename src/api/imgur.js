import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = 'd8c98aa37caa92d';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ ROOT_URL }/oauth2/authorize?${ qs.stringify(querystring) }`;
  },
  fetchImages(access_token) {
    return axios.get(`${ ROOT_URL }/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
  },
  uploadImages(images, access_token) {
    const promises = Array.from(images).map( image => {
      const formData = new FormData();

      formData.append('image', image);
      
      return axios.post(`${ ROOT_URL }/3/image`, formData, {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
    });
    return Promise.all(promises);
  }
};