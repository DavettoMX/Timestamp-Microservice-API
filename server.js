// init project
var express = require('express');
var cors = require('cors');
var app = express();

// enable CORS
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

// home page
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Local Time zone
app.get('/api/your-timezone', (req, res) => {
  let date = new Date();
  let time = date.toUTCString();

  res.json({
    "time": time,
  });
})

// Pacific Time zone
app.get('/api/pdt', (req, res) => {
  let date = new Date();
  //UTC offset -8
  date.setHours(date.getHours() - 8);
  let time = date.toUTCString();

  res.json({
    "time": time,
  });
});

// Europe Time zone
app.get('/api/europe', (req, res) => {
  let date = new Date();
  date.setHours(date.getHours() + 2);
  let time = date.toUTCString();

  res.json({
    "time": time,
  })
});

// Asia Time zone
app.get('/api/asia', (req, res) => {
  let date = new Date();
  date.setHours(date.getHours() + 8);
  let time = date.toUTCString();

  res.json({
    "time": time,
  })
});

// America Time zone
app.get('/api/america', (req, res) => {
  let date = new Date();
  date.setHours(date.getHours() - 5);
  let time = date.toUTCString();

  res.json({
    "time": time,
  })
});

// Africa Time zone
app.get('/api/africa', (req, res) => {
  let date = new Date();
  date.setHours(date.getHours() + 1);
  let time = date.toUTCString();

  res.json({
    "time": time,
  })
});

// Antarctica Time zone
app.get('/api/antarctica', (req, res) => {
  let date = new Date();
  date.setHours(date.getHours() + 4);
  let time = date.toUTCString();

  res.json({
    "time": time,
  })
});