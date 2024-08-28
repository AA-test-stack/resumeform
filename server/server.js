const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const filePath = path.join(__dirname, 'formData.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).send('An error occurred');
    }

    const existingData = data ? JSON.parse(data) : [];

    existingData.push(formData);

    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('An error occurred');
      }
      res.status(200).send('Form data saved successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
