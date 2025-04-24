// Task 5: Interfaces and Classes

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
  
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
  
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
  
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
  
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Task 6: Type predicate and execution function
  
  function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
      return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
  }
  
  // Task 7: String literal type and function
  
  type Subjects = 'Math' | 'History';
  
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    }
    return 'Teaching History';
  }
  
  // Test Cases
  console.log(createEmployee(200)); 
  console.log(createEmployee(1000));
  console.log(createEmployee('$500'));   
  
  console.log(executeWork(createEmployee(200))); 
  console.log(executeWork(createEmployee(1000)));
  
  console.log(teachClass('Math')); 
  console.log(teachClass('History'));
  