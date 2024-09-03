const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CRUD Routes Here
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Create
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;
    const query = 'INSERT INTO items (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, result) => {
      if (err) throw err;
      res.send('Item created');
    });
  });
  
  // Read
  app.get('/api/items', (req, res) => {
    const query = 'SELECT * FROM items';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Update
  app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
    db.query(query, [name, description, id], (err, result) => {
      if (err) throw err;
      res.send('Item updated');
    });
  });
  
  // Delete
  app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM items WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.send('Item deleted');
    });
  });
  