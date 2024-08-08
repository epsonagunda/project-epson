// server.js

const express = require('express'):
const path = require('path'):
const app = express();
const port = 3000;



// serve static file from 'public' directory

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'ping.html'));
});

app.listen(port, () +> {
	console.log('server running at http://localhost:${port}');
});

//backend ping functionality

const ping = require('ping');

app.get('/ping', async (req, res) => {
	const hostname = req.query.hostname;

	if (!hostname) {
		return res.status(400).send('Hostname is required.');         }
	try { const result = await ping.promise.probe(hostname);
		res.send('Host ${hostname} is ${result.alive ? 'alive' : 'dead'}\nRound-trip t
} catch (error) {
	res.status(500).send('ping failed: ' + error.message);
}
);
