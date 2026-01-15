const movieApi = require('../Service/api-client');

// Search by title
async function searchMovies(req, res) {
    const title = req.query.title;
    if (!title) {
        return res.status(400).json({ error: 'Title query parameter is required' });
    }
    try {
        const apiResponse = await movieApi.get(`?title=${title}`, {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY
            }
        });
        res.json(apiResponse.data);
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'An API error has occurred.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(502).json({ message: 'A Network error has occurred.' });
        }
    }
}

// Get movie by ID
async function getMovieDetails(req, res) {
    const id = req.params.id;
    try {
        const apiResponse = await movieApi.get('/', {
            params: {
                i: id,
                apikey: process.env.OMDB_API_KEY
            }
        });
        res.json(apiResponse.data);
    } catch (error) {
        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'An API error has occurred.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(502).json({ message: 'A Network error has occurred.' });
        }
    }
}

module.exports = { searchMovies, getMovieDetails };