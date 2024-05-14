// Mostrar el día de la semana en el encabezado
const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getDay()];
document.getElementById('dayOfWeek').textContent = `Hoy es ${dayOfWeek}`;

// Añadir clase 'active' a la opción de menú seleccionada
const currentLocation = window.location.href;
const menuItem = document.querySelectorAll('nav ul li a');

menuItem.forEach(item => {
    if (item.href === currentLocation) {
        item.classList.add('active');
    }
});


function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    alert("Enviado");
    
    // Evitar el envío del formulario
    return false;
}
