const express = require('express');
const app = express();

const conn  = require('./Database/Connection/Connection.ts');
const crud = require('./Utils/UtilityFunctions/crudOps');

conn.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:');
    return;
  }
  console.log('Connected to MySQL server!');
});

// Define an API endpoint
/* app.get('/api/inventory', (req, res) => {
  // Perform a MySQL query
  conn.query('SELECT * FROM inventory', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'An error occurred' });
      return;
    }
    console.log(results);
    res.json(results);
  });
}); */

const query = 'SELECT * FROM inventory';
crud.readData(query);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});