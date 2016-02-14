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

app.post('/', (req, res) => {
    const q = req.body;
    if (q && q.event) {
        const data = {
            event: q.event || '',
            worker: q.worker || '',
            assignmentId: q.assignmentId || '',
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
    console.log(q);
    if (q) {
        if (workers[q]) {
            res.status(400).end('You already joined');
        } else {
            workers[q] = true;
            res.send('');
        }
    }
    res.send('');
});

app.listen(3010, () => {
    console.log('Listening on port 3010');
});
