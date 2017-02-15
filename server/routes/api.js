const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// reading directories
const srcFolder = './materiais/';
let menus = [];
fs.readdir(srcFolder, (err, files) => {
    files.forEach((file, i) => {
        menus.push({
            id: i,
            name: file,
            url: file.split(' ', 1)[0].toLowerCase()
        });
    });
});

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* GET api listing. */
router.get('/menus', (req, res) => {
    res.send(menus);
});

// function that list all the files from the directory
function listFiles(url) {
    let files = [];
    menus.forEach(menu => {
        if (menu.url == url || url == 'undefined') {
            let pathFile = srcFolder + menu.name;
            let fileNames = fs.readdirSync(pathFile);
            fileNames.forEach((file, i) => {
                let extension = path.extname(file).split('.').pop();
                let content = null;

                if (extension.toLowerCase() == 'png' || extension.toLowerCase() == 'jpg') {
                    let data = fs.readFileSync(pathFile + '/' + file);

                    //convert image file to base64-encoded string
                    let base64Image = new Buffer(data, 'binary').toString('base64');

                    //combine all strings
                    content = "data:image/"+extension+';base64,'+base64Image;
                }

                files.push({
                    id: i,
                    name: file,
                    link: pathFile + '/' + file,
                    ext: extension,
                    content: content
                });
            });
        }
    });
    return files.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}

/* GET api listing. */
router.get('/materiais/:url', (req, res) => {
    res.send(listFiles(req.params.url));
});

// Get all posts
router.get('/posts', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
        .then(posts => {
            res.status(200).json(posts.data);
        })
        .catch(error => {
            res.status(500).send(error)
        });
});

module.exports = router;
