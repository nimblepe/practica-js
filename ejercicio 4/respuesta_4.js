const tasks = [
    {
        name: 'write for evato',
        duration: 120,
    },
    {
        name: 'work out',
        duration: 60,
    }
];

//enunciado a
const soloNombres = tasks.map((task) => task.name);
console.log(soloNombres);

//enunciado b
const soloDuracion = tasks.map((task) => task.duration);
console.log(soloDuracion);