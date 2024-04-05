# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

```js
// Route for /api/:date
app.get('/api/:date?', (req, res) => {
  let dateParam = req.params.date;
  
  // Check if dateParam is empty or undefined
  if (!dateParam) {
    dateParam = new Date();
  } else {
    // Attempt to parse the date parameter
    const date = new Date(dateParam);

    // Check if the date is valid
    if (isNaN(date)) {
      return res.json({ error: "Invalid Date" });
    }

    dateParam = date;
  }

  // Create JSON object with Unix timestamp and UTC string
  const response = {
    unix: dateParam.getTime(),
    utc: dateParam.toUTCString()
  };

  // Send JSON response
  res.json(response);
});
```aoeu
