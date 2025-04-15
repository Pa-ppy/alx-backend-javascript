export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const dept of Object.values(allEmployees)) {
    employees.push(...dept);
  }

  return employees[Symbol.iterator]();
}
