require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005


app.get('/', (req,res)=>{
    console.log('API ok');
    res.send('API OK')
})

app.listen(PORT, ()=>{console.log(`Server started at http://localhost:${PORT}`);
})