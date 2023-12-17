const students = [
    { name: 'Ahmad', marks: [85, 92, 88] },
    { name: 'ali', marks: [78, 85, 90] },
    { name: 'salma', marks: [90, 95, 87] },
  ];
  
  const studentsWithAverage = students.map(student => {
    const average = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
    return { ...student, average };
  });
  
  console.log(studentsWithAverage);

  const studentsAbove90 = studentsWithAverage.filter(student => student.average > 90);
console.log(studentsAbove90);

const totalAverage = studentsWithAverage.reduce((total, student) => total + student.average, 0) / students.length;
console.log(totalAverage);

students.forEach(student => {
    if (student.marks.length >= 3) {
      student.marks[2] = 50;
    } else {
      student.marks.push(50);
    }
  });
  
  console.log(students);

  const foundStudent = students.find(student => student.name.toLowerCase() === 'ali');
console.log(foundStudent);

  