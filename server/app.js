const express = require('express');
const {createServer} = require('node:http');
const cors = require('cors');


const port = process.env.PORT || 3000

const app = express()
app.use(cors());
const httpServer = createServer(app);

app.use(express.json());

app.get('/api/photos', (req, res) => {
    res.json([
        {id: 1, title: 'Photo 1'},
        {id: 2, title: 'Photo 2'},
    ])
})


httpServer.listen(port, () => {
    console.log(`Server is listening on ${port} port!`);
    
})