const express = require('express');
const cors = require('cors');

const controller = require('./controller');
const { request } = require('express');

const app = express();
const port = 3004;

app.use(cors())
app.use(express.json({ type: 'application/json'}))
app.use(express.urlencoded({ extended: false }))

app.get('/health', (req, res) => {
  return res.sendStatus(200);
})

app.post('/todos', (req, res) => {
  const newTitle = req.body.title;
  const newBody = req.body.body;
  // Create new todo here
  return res.status(201).json({
    message: 'todo created successfully',
    data: {
      title: newTitle,
      body: newBody
    }
  });
});

app.get('/todos', controller); //Routes

app.use('*', (req, res) => {
  return res.status
})
// 2xx - success
// 200 - success
// 201 - create success

// 3xx 
// 4xx
// 400 - bad request 
// 401 - request unauthorized
// 403 - forbidden 
// 404 - not found
// 5xx
// 500 - internal server error


app.listen(port, '0.0.0.0', () => {
 console.log(`app listening on port ${port}`);
})
