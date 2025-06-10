import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return reject(new Error('Cannot load the database'));

    const lines = data.trim().split('\n').slice(1).filter(Boolean);
    const result = {};

    for (const line of lines) {
      const [first, , , field] = line.split(',');
      if (!result[field]) result[field] = [];
      result[field].push(first);
    }

    return resolve(result);
  });
});

export default readDatabase;
