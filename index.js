// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Define route for /api/:date
app.get('/api/:date', (req, res) => {
  // Parse the date parameter from the url
  const dateString = req.params.date;

  // Parse the date
  const date = new Date(dateString);

  // Check if the date is valid
  if (isNaN(date)) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  // Convert the date to Unix timestamp in milliseconds
  const unixTimestampMillis = date.getTime();

  // Return JSON object with the Unix timestamp
  res.json({ unix: unixTimestampMillis });
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
