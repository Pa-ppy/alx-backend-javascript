const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n');
      lines.shift();
      const result = {};

      for (const line of lines) {
        if (line) {
          const [first, , , field] = line.split(',');
          if (!result[field]) result[field] = [];
          result[field].push(first);
        }
      }

      console.log(`Number of students: ${lines.length}`);
      for (const field in result) {
        if (Object.prototype.hasOwnProperty.call(result, field)) {
          console.log(
            `Number of students in ${field}: ${
              result[field].length
            }. List: ${result[field].join(', ')}`,
          );
        }
      }

      return resolve();
    });
  });
}

module.exports = countStudents;
