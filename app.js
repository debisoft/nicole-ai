const handler = require('serve-handler');
const express = require('express')
const app = express()
const port = 3000
var request = require('sync-request');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	 handler(req, res, {	"public": "wwwroot"});
})

app.post('/api/', (req, res) => {

var response = request('POST', 'https://debisoft-magic.hf.space/api/predict', {
	json: {data: [req.body.data]},
});
	 res.setHeader('Content-Type', 'application/json');
  res.send(response.getBody('utf8'));
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});
