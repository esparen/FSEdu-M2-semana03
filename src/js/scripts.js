// mocked student grades
let studentGrades = [90, 85, 88, 92];


/**
 * Calculates the average of an array of grades.
 *
 * @param {number[]} grades - An array of grades.
 * @returns {number} The average of the grades.
 */
function calculateAverage(grades) {
  let sum = 0;
  for (let grade of grades) {
	sum += grade;
  }
  let average = sum / grades.length;
  return average;
}


/**
 * Checks if the average grade is passing or not.
 * @param {number} average - The average grade to be checked.
 * @returns {boolean} - Returns true if the average grade is passing, false otherwise.
 */
function checkPassingGrade(average) {
  switch (true) {
    case isNaN(average):
      document.write(`O valor informado (${average}) não é uma média de notas válida.`);
      return false;
    case average > 7:
      document.write("Parabéns você passou na média !");
      break;
    default:
      document.write("Infelizmente você está de recuperação.");
  }
  return true;
}

// Example usage:
// let average = calculateAverage(studentGrades);
// checkPassingGrade(average);
// checkPassingGrade('valor NAN'); // testando valor NaN