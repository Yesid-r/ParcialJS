function filtrarPeliculas() {
    const filtroTitulo = document.getElementById("filtroTitulo").value.toLowerCase();
    const filtroAnio = document.getElementById("filtroAnio").value;
    const filtroInicio = document.getElementById("filtroInicio").value;
    const filtroFin = document.getElementById("filtroFin").value;
    const tablaPeliculas = document.getElementById("tablaPeliculas");
    const filas = tablaPeliculas.getElementsByTagName("tr");

    for (let i = 0; i < filas.length; i++) {
       const celdaTitulo = filas[i].getElementsByTagName("td")[1];
       const celdaAnio = filas[i].getElementsByTagName("td")[4];
       const celdaFecha = filas[i].getElementsByTagName("td")[12];
       if (celdaTitulo && celdaAnio && celdaFecha) {
          const titulo = celdaTitulo.textContent.toLowerCase();
          const anio = celdaAnio.textContent;
          const fecha = celdaFecha.textContent;
          const mostrarFila = (
             titulo.includes(filtroTitulo) &&
             anio.startsWith(filtroAnio) &&
             (!filtroInicio || fecha >= filtroInicio) &&
             (!filtroFin || fecha <= filtroFin)
          );
          filas[i].style.display = mostrarFila ? "" : "none";
       }
    }
 }

 function limpiarFiltro() {
    document.getElementById("filtroTitulo").value = "";
    document.getElementById("filtroAnio").value = "";
    document.getElementById("filtroInicio").value = "";
    document.getElementById("filtroFin").value = "";
    filtrarPeliculas();
 }