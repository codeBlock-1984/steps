const express = require('express');

const app = express();
const port = 3000;

app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));

app.get('/health', function (req, res) {
  res.status(200).send({ msg: "up and running" });
});

app.post('/jobs', function (req, res) {
  console.log(req.body.message);
  res.status(200).json({ msg: "acknowledged" });
});

app.use('*', function (req, res) {
  res.status(404).send({ msg: "route not found" });
});

app.listen(port, function () {
  console.log('server listening on port', port);
});
