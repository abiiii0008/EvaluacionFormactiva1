document.addEventListener("DOMContentLoaded", () => {
  const btnMas = document.getElementById("btn-mas");
  if (btnMas) {
    btnMas.addEventListener("click", () => {
      const lista = document.getElementById("lista-consejos");
      const nuevo = document.createElement("li");
      nuevo.textContent = "Reflexiona antes de compartir contenido generado por IA.";
      lista.appendChild(nuevo);
    });
  }
  
  const modal = document.getElementById("modal");
  const cerrar = document.getElementById("cerrar");
  if (modal && cerrar) {
    cerrar.onclick = () => modal.style.display = "none";
    window.onclick = (event) => {
      if (event.target === modal) modal.style.display = "none";
    };
  }
});

function mostrarCaso(texto) {
  const modal = document.getElementById("modal");
  const textoCaso = document.getElementById("texto-caso");
  if (modal && textoCaso) {
    textoCaso.textContent = texto;
    modal.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-reflexion");
  const lista = document.getElementById("lista-reflexiones");
  const btnBorrar = document.getElementById("btn-borrar");

  if (form) {
    let reflexiones = JSON.parse(localStorage.getItem("reflexiones")) || [];

    const mostrarReflexiones = () => {
      lista.innerHTML = "";
      reflexiones.forEach((r, i) => {
        const li = document.createElement("li");
        li.textContent = `${r.nombre} (${r.correo}): ${r.mensaje}`;
        lista.appendChild(li);
      });
    };

    mostrarReflexiones();

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre && correo && mensaje) {
        reflexiones.push({ nombre, correo, mensaje });
        localStorage.setItem("reflexiones", JSON.stringify(reflexiones));
        mostrarReflexiones();
        form.reset();
        alert("Gracias por tu reflexión!");
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });

    btnBorrar.addEventListener("click", () => {
      localStorage.removeItem("reflexiones");
      reflexiones = [];
      mostrarReflexiones();
    });
  }
});
