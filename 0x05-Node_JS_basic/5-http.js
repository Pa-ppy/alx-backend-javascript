const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (url === '/students') {
    const dbPath = process.argv[2];
    fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
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

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(response.trim());
    });
  }
});

app.listen(1245);
module.exports = app;
