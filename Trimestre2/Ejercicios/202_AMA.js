function validar() {
    // Validación del nombre
    const nombre = document.getElementById("nombre");
    if (nombre.value === "") {
      alert("El nombre es obligatorio");
      nombre.focus();
      return false;
    }
  
    // Validación del NIF
    const nif = document.getElementById("nif");
    if (!nif.value.match(/^[0-9]{8}[A-Z]$/)) {
      alert("El NIF no es válido");
      nif.focus();
      return false;
    }
  
    // Validación del mensaje
    const mensaje = document.getElementById("mensaje");
    if (mensaje.value.length < 2 || mensaje.value.length > 500) {
      alert("El mensaje debe tener entre 2 y 500 caracteres");
      mensaje.focus();
      return false;
    }
  
    // Validación de los días
    const dias = document.querySelectorAll("input[name='dias[]']");
    let diasSeleccionados = 0;
    for (const dia of dias) {
      if (dia.checked) {
        diasSeleccionados++;
      }
    }
    if (diasSeleccionados < 2) {
      alert("Debe seleccionar al menos dos días");
      return false;
    }
  
    return true;
  }
  
  function marcarDias() {
    const dias = document.querySelectorAll("input[name='dias[]']");
    const todos = document.getElementById("dias_todos");
    for (const dia of dias) {
      dia.checked = todos.checked;
    }
  }
  
  function actualizarContador() {
    const mensaje = document.getElementById("mensaje");
    const contador = document.getElementById("contador_caracteres");
    const caracteresRestantes = 500 - mensaje.value.length;
    contador.textContent = `${caracteresRestantes} caracteres restantes`;
  }
  
  // Asignar evento al textarea para actualizar el contador
  document.getElementById("mensaje").addEventListener("keyup", actualizarContador);
  
  // Actualizar el contador al cargar la página
  actualizarContador();
  