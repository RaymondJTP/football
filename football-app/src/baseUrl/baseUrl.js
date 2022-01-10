import axios from 'axios'

let http = axios.create({
  baseURL: 'http://api.football-data.org/v2',
  headers: {'X-Auth-Token': 'c179805176e442958354918f196654cf'}
})

export default http