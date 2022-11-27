/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

//case 1
// Mostrar en formato de tabla todos los alumnos. 
console.table(students);

//case 2
// Mostrar por consola la cantidad de alumnos que hay en clase.
console.log(students.length);

//case 3
// Mostrar por consola todos los nombres de los alumnos.
for (let studentIndex = 0; studentIndex < students.length ; studentIndex++){

  console.log(students[studentIndex].name);
  
}

//case 4
// Eliminar el último alumno de la clase.
students.pop();
console.table(students);

//case 5
// Eliminar un alumno aleatoriamente de la clase.
students.splice(calculateRandomNumber(0, students.length), 1);
console.table(students);

// Calcula un número aleatorio 
function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

//case 6
// Mostrar por consola todos los datos de los alumnos que son chicas.
const isFemale = students.filter(students => students.gender === 'female');
console.table(isFemale);

//case 7
// Mostrar por consola el número de chicos y chicas que hay en la clase.
isFemale = students.filter(students => students.gender === 'female');
console.log(`Cantidad de alumnas: ${isFemale.length}`);
const isMale = students.filter(students => students.gender === 'male');
console.log(`Cantidad de alumnos: ${isMale.length}`);

//case 8
// Mostrar true o false por consola si todos los alumnos de la clase son chicas.
const allFemale = students.length > 0 ? students.every(students => students.gender === 'female') : false
console.log(allFemale);

//case 9
// Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
const ageRangeList = students.filter(students => students.age >= 20 && students.age <= 25);
for (let studentIndex = 0; studentIndex < ageRangeList.length ; studentIndex++){

  console.log(ageRangeList[studentIndex].name);
  
}

//case 10
/*
Añadir un alumno nuevo con los siguientes datos:
  - nombre aleatorio.
  - edad aleatoria entre 20 y 50 años.
  - género aleatorio.
  - listado de calificaciones vacío.
*/

const randomGender = availableGenders[calculateRandomNumber(0,availableGenders.length - 1)];
const randomName = randomGender === 'female' ? availableFemaleNames[calculateRandomNumber(0, availableFemaleNames.length - 1)] : availableMaleNames[calculateRandomNumber(0, availableMaleNames.length - 1)];
const randomAge = calculateRandomNumber(20, 50);

students.push({ age: randomAge, examScores: [], gender: randomGender, name: randomName });
console.table(students);

//case 11
//Mostrar por consola el nombre de la persona más joven de la clase.
const youngestStudent = students.reduce((prev, curr) => prev.age < curr.age ? prev : curr);
console.log(youngestStudent);
console.log(youngestStudent.name);

//case 12
// Mostrar por consola la edad media de todos los alumnos de la clase.
const studentAges = students.map(students => students.age);
const sumAllAges = studentAges.reduce((accum, n) => accum + n, 0);
const averageAge = Math.round(sumAllAges / students.length) ;
console.log(averageAge);

//case 13
// Mostrar por consola la edad media de las chicas de la clase.
isFemale = students.filter(students => students.gender === 'female');
const femaleAges = isFemale.map(students => students.age);
const sumFemaleAges = femaleAges.reduce((accum, n) => accum + n, 0);
const averageFemaleAge = Math.round(sumFemaleAges / isFemale.length) ;
console.log(averageFemaleAge);

//case 14
//Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma 
//aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
students.forEach(students => students.examScores.push(calculateRandomNumber(0, 10)));
console.table(students);

//case 15
//Ordenar el array de alumnos alfabéticamente según su nombre.
const alphaOrder = students.sort((a, b) => a.name.localeCompare(b.name))
console.table(alphaOrder)

