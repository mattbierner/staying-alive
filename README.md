# Staying Alive

Code for a Mechanical Turk experiment that asks workers to survive for five minutes.


### `index.html`
HIT served to workers. Contains a simple timer that counts down the five minutes.

At the end of five minutes, workers are presented a simple test to make sure they are still alive.

Make sure to register you HIT with [Unique Turker](https://uniqueturker.myleott.com) and update the id found in `index.html`.


### `server.js`
Simple Node.js express server used for collecting telemetry.

```bash
$ npm install
$ node server.js
```

Writes pseudo-json to `log.txt`. Make sure to update `server` in `index.html` to point to your server.
