import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID B23O5WIm2pYYJh9eAYqWHIndIIBbysM53gSVnIIGEYA'
  }
});
