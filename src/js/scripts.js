
// mocked student grades
let studentGrades = [90, 85, 88, 92];


function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
	sum += grade;
  }
  let average = sum / grades.length;
  return average;
}

//let average = calculateAverage(studentGrades);
//console.log(average);

