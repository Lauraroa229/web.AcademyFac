document.getElementById("formRegistro").addEventListener("submit", function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const correo = document.getElementById("correo").value
    const contraseña = document.getElementById("contraseña").value
    const genero = document.getElementById("genero").value

    const usuario = {
      nombre: nombre,
      apellido: apellido,
      correo: correo,
      contraseña: contraseña,
      genero: genero
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify (usuario));
    window.location.href = "logueo.html";
  });