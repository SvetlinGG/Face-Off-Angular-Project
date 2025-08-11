const express = require('express');
const {createServer} = require('node:http');
const cors = require('cors');


const port = process.env.PORT || 3000

const app = express()
app.use(cors());
const httpServer = createServer(app);


httpServer.listen(port, () => {
    console.log(`Server is listening on ${port} port!`);
    
})