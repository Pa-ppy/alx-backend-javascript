const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n');
    const students = data.filter((line) => line.trim() !== '');
    students.shift();

    const result = {};
    for (const line of students) {
      const fields = line.split(',');
      const field = fields[3];
      const name = fields[0];
      if (!result[field]) result[field] = [];
      result[field].push(name);
    }

    let total = 0;
    for (const field in result) {
      if (Object.prototype.hasOwnProperty.call(result, field)) {
        const count = result[field].length;
        console.log(
          `Number of students in ${field}: ${count}. List: ${result[field].join(
            ', ',
          )}`,
        );
        total += count;
      }
    }

    console.log(`Number of students: ${total}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
