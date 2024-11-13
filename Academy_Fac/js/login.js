document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();
    const correoLogin = document.getElementById("correoLogin").value;
    const contraseñaLogin = document.getElementById("contraseñaLogin").value;
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (usuarioRegistrado && usuarioRegistrado.correo === correoLogin && usuarioRegistrado.contraseña === contraseñaLogin) {
      localStorage.setItem ("nombreUsuario", usuarioRegistrado.nombre);
      window.location.href = "index.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
  