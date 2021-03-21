const funcionesDeTareas = require("./funcionesDeTareas");

let leerJSON = funcionesDeTareas.leerJSON();


switch(process.argv[2]){
    case "listar":
        leerJSON.forEach(tarea => {
            console.log("La tarea " + tarea.titulo + " se encuenta: " + tarea.estado);
        });
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción.");  
        break;
    case "crear":
        let nuevaTarea = {titulo: process.argv[3], estado: "pendiente"};
        funcionesDeTareas.guardarJSON(nuevaTarea);
        break;
    case "filtrar":
        let filtradas = funcionesDeTareas.leerPorEstado(process.argv[3]);
        filtradas.forEach(tarea => {
            console.log("La tarea " + tarea.titulo + " se encuenta: " + tarea.estado);
        });
        break;
    default:
        console.log("No entiendo qué quieres hacer.");  
}

