const pool = require('../modules/pool');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log(req.body);

    let sqlQuery = `UPDATE "images"
        SET "likes"=$1
        WHERE "id"=$2;`;

    let sqlValues = [galleryItem.likes, req.params.id];

    pool.query(sqlQuery, sqlValues)
    .then((response) => {
        console.log('Success in PUT!', response);
        
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in PUT!', error);
        res.sendStatus(500);
    })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // res.send(galleryItems);
    console.log('In GET /gallery router.');
    let sqlQuery = `SELECT * FROM "images";`;
    pool.query(sqlQuery)
    .then((response) => {
        console.log('Response from server in GET: ', response.rows);
        res.send(response.rows);
    })
    .catch((error) => {
        console.log('Error in GET: ', error);
        res.sendStatus(500);
    })

}); // END GET Route

module.exports = router;