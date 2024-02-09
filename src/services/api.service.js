import axios from '../config/axios'
const getMenu = () => {return axios.get('dataset=menus_des_restaurants_scolaires')}

export default getMenu