
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());

const viewCountFile = './viewcount.json';

// Get the current view count
app.get('/api/views', (req, res) => {
  fs.readFile(viewCountFile, 'utf8', (err, data) => {
    if (err) {
      // If the file doesn't exist, initialize it with 0 views
      if (err.code === 'ENOENT') {
        fs.writeFile(viewCountFile, '{"views": 0}', (err) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to initialize view count' });
          }
          res.json({ views: 0 });
        });
      } else {
        return res.status(500).json({ error: 'Failed to read view count' });
      }
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Increment the view count
app.post('/api/views', (req, res) => {
  fs.readFile(viewCountFile, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.writeFile(viewCountFile, '{"views": 1}', (err) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to initialize view count' });
          }
          res.json({ views: 1 });
        });
      } else {
        return res.status(500).json({ error: 'Failed to read view count' });
      }
    } else {
      const viewCount = JSON.parse(data);
      viewCount.views++;
      fs.writeFile(viewCountFile, JSON.stringify(viewCount), (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to update view count' });
        }
        res.json(viewCount);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
