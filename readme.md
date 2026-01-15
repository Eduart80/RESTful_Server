## Movie Finder RESTful Server

This app is a simple backend server for a movie finder application. It uses Node.js, Express, and Axios to fetch movie data from the OMDb API and provides RESTful endpoints for searching movies and viewing detailed information.

### Features
- Search for movies by title using `/api/search?title=MovieTitle`
- Get detailed information for a specific movie using `/api/movies/:id`
- Includes a basic HTML front-end (`movie-finder.html`) for easy testing and demonstration

### How it works
The server acts as a midlware between front-end and the OMDb API. It receives requests from the client, fetches data from OMDb, and returns data, relevant movie information in JSON format.

### Getting Started
1. Install dependencies: `npm install`
2. Add your OMDb API key to a `.env` file as `OMDB_API_KEY=your_key_here`
3. Start the server: `node server.js`
4. Open `movie-finder.html` in your browser to test the app

