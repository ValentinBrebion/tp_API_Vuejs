import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/'
  })
  
  export default instance