require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005
const movieRoutes = require('./Routes/movieRoutes')

app.use(express.json())
app.use(express.urlencoded())

app.use('/api', movieRoutes )

app.get('/', (req,res)=>{
    res.send('API OK')
})

app.listen(PORT, ()=>{console.log(`Server started at http://localhost:${PORT}`);
})