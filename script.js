let codigosGenerados = [];

function generarCodigo() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 10; i++) {
        codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    codigosGenerados.push(codigo);
    document.getElementById("codigoGenerado").textContent = "Código generado: " + codigo;
}

function validarCodigo() {
    const codigoIngresado = document.getElementById("codigoInput").value;
    const mensaje = document.getElementById("mensaje");
    const index = codigosGenerados.indexOf(codigoIngresado);
    if (index !== -1) {
        mensaje.textContent = "Cupón válido";
        mensaje.style.color = "green";
        codigosGenerados.splice(index, 1);
    } else {
        mensaje.textContent = "Cupón inválido";
        mensaje.style.color = "red";
    }
}
