const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const fields = {};

      for (const line of students) {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      const output = [];
      output.push(`Number of students: ${students.length}`);
      for (const field in fields) {
        output.push(
          `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}`,
        );
      }
      resolve(output.join('\n'));
    });
  });
}

const database = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    countStudents(database)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
