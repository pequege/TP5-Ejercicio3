//obtener elementos del DOM
const tareaInput = document.getElementById('tareaInput'); //input de tarea
const formularioTarea = document.querySelector('form'); //formulario
const ListaTareas = document.getElementById("ListaTareas"); //div donde se listarán las tareas
const emptyTaskModal = new bootstrap.Modal(document.getElementById("emptyTaskModal")); // Instanciar el modal de advertencia

formularioTarea.addEventListener('submit', agregarTarea);
ListaTareas.addEventListener("click", deleteTask);


function agregarTarea(e){
    e.preventDefault();
    const tarea = tareaInput.value.trim();
    if(tarea !== ""){
        const listItem = document.createElement("li"); // Crear un nuevo elemento li
        listItem.className = "list-group-item d-flex justify-content-between align-items-center"; // Agregar clases de Bootstrap
        listItem.innerHTML = `${tarea}<button class="btn btn-danger btn-sm ml-3 deleteTaskBtn">Eliminar</button>`; // Agregar contenido HTML al elemento li
        ListaTareas.appendChild(listItem); // Agregar el elemento li a la lista
        tareaInput.value = ""; // Limpiar el input
    } else{
        showEmptyTaskModal();
    }
}

// Función para mostrar el modal de advertencia
function showEmptyTaskModal() {
    emptyTaskModal.show();
}

// Función para eliminar una tarea de la lista
function deleteTask(event) {
    if (event.target.classList.contains("deleteTaskBtn")) {
        // Verificar si se hizo clic en el botón de eliminar
        const listItem = event.target.parentElement; // Obtener el elemento li que contiene el botón
        ListaTareas.removeChild(listItem); // Eliminar el elemento li de la lista
    }
}