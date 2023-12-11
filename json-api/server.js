const expres = require('express');
const fs = require('fs');

const app = express();
const port = 3000;


const rawData = fs.readFileSync('commment_header.json');
const jsonData = JSON.parse(rawData);


app.get('/api/data', (req, res) => {
    res.json(jsonData);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})
