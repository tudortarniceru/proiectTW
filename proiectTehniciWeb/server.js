
const express = require('express')
const app = express()
const port = 8080

const fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    fs.readFile("public/index.html", function (err,data) {
        if (err) {
            console.error("index.html NOT FOUND");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
})

//get the images json
app.get('/images', (req,res) => {
    fs.readFile("images.json", function (err,data) {
        if (err) {
            console.error("images.json NOT FOUND");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
})

//delete all the images data from json
app.get('/delete-all', (req,res) => {
    let data = {
        noOfImages: 0
    }
    let wr = JSON.stringify(data);
    fs.writeFile('images.json', wr, function (err) {
        if (err) return console.log(err);
        console.log('ALL IS DELETED');
    });
})

app.post("/upload")

app.use('/static', express.static('public'))

app.listen(port, () => console.log(`Link: http://localhost:${port}`))
