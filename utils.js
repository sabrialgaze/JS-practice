// Datos challenge
export const students = [{
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
  
export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];

// Calcula un número aleatorio 
export function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};

// Muestra menú
const menu = "\n\nElige una opción:\n0 - Cierra la aplicación.\n1 - Todos los alumnos en formato tabla.\n2 - Número de alumnos que hay en clase.\n3 - Nombre de todos los alumnos.\n4 - Elimina el último alumno/a de la clase.\n5 - Elimina a un alumno/a aleatoriamente.\n6 - Datos de las alumnas.\n7 - Número de alumnos y alumnas que hay en clase.\n8 - ¿Son todos los alumnos chicas?.\n9 - Nombres de los alumnos entre 20 y 25 años.\n10- Añadir un nuevo alumno aleatorio.\n11 - Nombre del alumno/a más joven de la clase.\n12 - Edad media de todos los alumnos.\n13 - Edad media de las alumnas de la clase.\n14 - Añadir nueva nota aleatoria a los alumnos.\n15 - Ordenar alfabéticamente a los alumnos.\n\n"

export const showMenu = () => {
    console.log(menu)
}

// Comprueba si el input es un número
export const isInt = (num) => {
    return !Number.isNaN(num)
}