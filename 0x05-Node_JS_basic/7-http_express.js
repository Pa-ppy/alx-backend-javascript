import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2];
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
      return;
    }

    const lines = data.trim().split('\n').slice(1).filter(Boolean);
    const result = {};

    for (const line of lines) {
      const [first, , , field] = line.split(',');
      if (!result[field]) result[field] = [];
      result[field].push(first);
    }

    let response = 'This is the list of our students\n';
    response += `Number of students: ${lines.length}\n`;

    for (const field in result) {
      if (Object.prototype.hasOwnProperty.call(result, field)) {
        response += `Number of students in ${field}: ${
          result[field].length
        }. List: ${result[field].join(', ')}\n`;
      }
    }

    res.send(response.trim());
  });
});

app.listen(1245);
export default app;
