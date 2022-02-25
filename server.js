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

// API Requests
app.get('/api/:date_string', function (req, res) {
  const { date_string } = req.params;
  let date = new Date(date_string);

  if (date.toString() === 'Invalid Date') {
    date = new Date(parseInt(date_string));
    res.json({
      error: 'Invalid Date'
    });
  } else {
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  }
});