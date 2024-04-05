# Timestamp Microservice

This is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

```js
// Define route for /api/:date
app.get('/api/:date', (req, res) => {
  // Parse the date parameter from the URL
  const dateString = req.params.date;

  // Attempt to parse the date
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
```