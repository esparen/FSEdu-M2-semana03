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

/**
 * Prints all the names in the array using document.write.
 *
 * @param {string[]} names - An array of names (or strings).
 */
function printNames(names) {
  // validate if names is an array containing values and is not empty
  // else return false and print a error message
  if (!Array.isArray(names) || names.length === 0) {
    document.write(`O array de nomes está vazio ou não é um array válido. Valor recebido: ${names} <br>`);
    return false;
  } else {
    document.write("Nomes registrados: <br>");
    names.forEach((name) => {
      document.write(name + "<br>");
    });
  }
  
}

 //let studentNames = ["Edd", "Gabriela", "Karina", "Lucas", "Rafael", "Thiago"];
 //printNames(studentNames);
 //printNames('string'); // testando valor string
 //printNames([]); // testando array vazio

/**
 * Display the multiplication table for a given number.
 *
 * @param {number} number
 */
function generateMultiplicationTable(number) {
  if (isNaN(number)) {
    document.write(`O valor informado (${number}) não é um número válido. <br>`);
    return false;
  }
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    document.write(`  ${number} x ${i} = ${result}<br>`);
  }
  return true;
}


//generateMultiplicationTable(8);
//generateMultiplicationTable(5);