import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort();

        for (const field of sortedFields) {
          const list = fields[field];
          response += `Number of students in ${field}: ${
            list.length
          }. List: ${list.join(', ')}\n`;
        }

        res.status(200).send(response.trim());
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(dbPath)
      .then((fields) => {
        const list = fields[major];
        return res.status(200).send(`List: ${list ? list.join(', ') : ''}`);
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
