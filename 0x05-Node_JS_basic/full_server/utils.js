import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n').slice(1);
      const result = {};

      lines.forEach((line) => {
        if (line) {
          const [first, , , field] = line.split(',');
          if (!result[field]) result[field] = [];
          result[field].push(first);
        }
      });

      resolve(result);
    });
  });
}
