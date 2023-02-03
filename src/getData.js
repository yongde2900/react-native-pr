import axios from 'axios'

const dataRequest = axios.create({
    baseURL: 'http://localhost:3000/api/data',
    headers: { "Content-Type": 'application/json' }
})


export default dataRequest