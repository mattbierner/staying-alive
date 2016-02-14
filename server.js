/**
    Super simple server used to collect telemety.
*/
"use strict";
const express = require('express');
const fs = require('fs');
const path = require('path');

// Where to write data
const LOG_FILE = path.join(__dirname, 'log.txt');

const workers = {}

// start server
const app = express();
app.use(require('body-parser').json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/data', (req, res) => {
    const q = req.body;
    if (q && q.event) {
        const data = {
            event: q.event || '',
            worker: q.worker || '',
            assignmentId: q.assignment || '',
            remote_time: q.time || 0,
            local_time: Date.now()
        };
        console.log(data);
        fs.appendFileSync(LOG_FILE, JSON.stringify(data) + ',\n');
    }
    res.send('');
});


app.get('/workers', (req, res) => {
    const q = req.query;
    if (q && q.worker) {
        if (workers[q.worker]) {
            res.send('1');
        } else {
            res.send('0');
        }
    } else {
        res.send('');
    }
});

app.post('/workers', (req, res) => {
    const q = req.query;
    if (q && q.worker) {
        workers[q.worker] = true;
    }
    res.send('');

});

app.listen(3010, () => {
    console.log('Listening on port 3010');
});
