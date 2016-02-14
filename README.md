# Staying Alive
Code for a Mechanical Turk experiment that asks workers to survive for five minutes. That's it!

<img src="https://raw.githubusercontent.com/mattbierner/staying-alive/master/documentation/example.png" />

### `index.html`
HIT served to workers. Contains a simple timer that counts down the five minutes.

At the end of five minutes, workers are presented a simple test to make sure they are still alive.

<img src="https://raw.githubusercontent.com/mattbierner/staying-alive/master/documentation/example-win.png" />


### `server.js`
Simple Node.js express server used for collecting telemetry. Also used to make sure workers only complete the hit once at most.

```bash
$ npm install
$ node server.js
```

Writes pseudo-json to `log.txt`. Make sure to update `server` in `index.html` to point to your server.
