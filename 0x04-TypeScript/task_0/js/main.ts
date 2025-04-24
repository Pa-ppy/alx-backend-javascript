interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 21,
    location: 'New York',
  };
  
  const student2: Student = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 23,
    location: 'Los Angeles',
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Render table
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const locationCell = row.insertCell();
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  document.body.appendChild(table);
  