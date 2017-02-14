const express = require('express');
const router = express.Router();
const fs = require('fs');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// reading directories
const srcFolder = './materiais/';
let menus = [];
fs.readdir(srcFolder, (err, files) => {
    let i=0;
    files.forEach(file => {
        menus.push({
            id: i,
            name: file,
            url: file.split(' ', 1)[0].toLowerCase()
        });
        i++;
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

/* GET api listing. */
router.get('/materiais/:url', (req, res) => {
    //res.send(menus);
    console.log(req.params);
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