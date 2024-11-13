window.onload = function() {
    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    if (usuarioActivo) {
      document.getElementById("user-login").innerHTML = `
        <span>${usuarioActivo}</span>
        <button onclick="cerrarSesion()">Cerrar Sesión</button>`;
    }
  };
  
  function cerrarSesion() {
    sessionStorage.removeItem("usuarioActivo");
    window.location.reload();
  }
  