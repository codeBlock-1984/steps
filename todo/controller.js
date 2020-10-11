const todos = require('./todo');

module.exports = (req, res) => {
  console.log('here');
  return res.status(200).json({
    message: 'successfully fetched todos',
    data: todos
  });
};