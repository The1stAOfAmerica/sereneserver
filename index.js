//main file
const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000 || process.env.PORT;
const db = require('./db.js');
const ops = require('./operations.js');
app.use(cors())
app.use(express.json());

app.get('/', function(req, res, next) {
  res.json({});
});

app.get('/scores', function(req, res, next) {
    try {
      ops.getScores(db, req.query.userid, res);
    } catch(err) {
      console.error(`Error while getting scores `, err.message);
      next(err);
    }
  });

app.post('/user', function(req, res, next) {
    try {
      ops.createUser(db, req.body, res);
    } catch(err) {
      console.error(`Error while creating user `, err.message);
      next(err);
    }
  });


app.listen(port, () => {
  console.log(`Go to Browser and try http://localhost:${port}`);
});