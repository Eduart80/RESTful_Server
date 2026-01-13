const movieApi = require('../Service/api-client')

async function getMovie(req, res) {
    try{
        const { t, s, i } = req.query;
        console.log(req.query);
        
        const apiResponse = await movieApi.get('/', {
            params: {
                apikey: process.env.OMDB_API_KEY,
                t,//by title
                s, // from search bar
                i // id number
            }
        })
        res.json(apiResponse.data)
    }catch(error){
        if (error.response) {
        console.error("API Error:", error.response.status, error.response.data);
        res.status(error.response.status).json({ message: "An API error has occurred." });
        } else {
        console.error("Network Error:", error.message);
        res.status(502).json({ message: "A Network error has occurred." });
        }
    }
}

module.exports = { getMovie }