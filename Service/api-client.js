require('dotenv').config()
const axios = require('axios')

const movieApi = axios.create({
    baseURL: `http://www.omdbapi.com/`
})

module.exports = movieApi