import axios from 'axios';

const Axios = axios.create({
    baseURL:"https://ucsl-volting-system.herokuapp.com/"
})

export default Axios;