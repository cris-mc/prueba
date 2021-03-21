let fs = require('fs');

function leerJSON(){
    let tareas = fs.readFileSync('./tareas.json', 'utf-8');
    tareas = JSON.parse(tareas);
    return tareas;
}

function escribirJSON(array){
    listadoNuevo = JSON.stringify(array);
    fs.writeFileSync('./tareas.json', listadoNuevo);
    return ;
}

function guardarJSON(tareaNueva){
    let tareas = leerJSON();
    tareas.push(tareaNueva);
    escribirJSON(tareas);
    return ;
}

function leerPorEstado(estado){
    let tareas = leerJSON();
    let filtradas = tareas.filter(tarea => {
        return tarea.estado == estado;
    })
    return filtradas;
}

module.exports = {
    leerJSON, 
    escribirJSON, 
    guardarJSON,
    leerPorEstado
};