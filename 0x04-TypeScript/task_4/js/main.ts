/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import CppClass = Subjects.Cpp;
import JavaClass = Subjects.Java;
import ReactClass = Subjects.React;
import Teacher = Subjects.Teacher;

// Export required instances
export const cpp = new CppClass();
export const java = new JavaClass();
export const react = new ReactClass();

export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
