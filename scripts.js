document.getElementById('fetchButton').addEventListener('click', showVideo);

function showVideo() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ucCXMM7LTY0" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    `;
}


// Obtener el botón que abre el modal
var btn = document.getElementById('loginBtn');

// Obtener el modal
var modal = document.getElementById('loginModal');

// Obtener el botón de cierre del modal
var span = document.getElementsByClassName('close')[0];

// Obtener el botón de inicio de sesión
var loginSubmit = document.getElementById('loginSubmit');

// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function() {
    modal.style.display = 'block';
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = 'none';
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Verificación de entrada en el formulario de inicio de sesión
loginSubmit.onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si los campos están vacíos
    if (!username.trim() || !password.trim()) {
        // Mostrar mensaje de error
        alert('Por favor, completa ambos campos');
    } else {
        // Si ambos campos están completos, enviar el formulario
        document.getElementById('loginForm').submit();
    }
}
