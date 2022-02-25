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

// returns current timestamp, if the date_string is empty
app.get('/api', (req, res) => {
  res.json(
    {
      "unix": new Date().getTime(),
      "utc": new Date().toUTCString()
    }
  );
});

// request
app.get('/api/:date_string', (req, res) => {
  const {date_string} = req.params;
  let date = new Date(date_string);

  if (date.toString() === 'Invalid Date') {
    date = new Date(parseInt(date_string));
  }
  if (date.toString() === 'Invalid Date') {
    return res.json(
      {
        "error": "Invalid Date"
      }
    );
  }
  else {
    return res.json(
      {
        "unix": date.getTime(),
        "utc": date.toUTCString()
      }
    );
  }
});