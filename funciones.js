// Función para sumar los cuatro números
function sumarTodos() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa todos los números.";
        return;
    }

    const sumaTotal = num1 + num2 + num3 + num4;
    document.getElementById("resultado").textContent = `La suma de los cuatro números es: ${sumaTotal}`;
}

// Función para sumar el Número 2 y el Número 4
function sumarDosSegundos() {
    const num2 = parseFloat(document.getElementById("num2").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    if (isNaN(num2) || isNaN(num4)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa los números 2 y 4.";
        return;
    }

    const sumaDosSegundos = num2 + num4;
    document.getElementById("resultado").textContent = `La suma del Número 2 y el Número 4 es: ${sumaDosSegundos}`;
}

// Función para realizar las operaciones originales con el nuevo criterio de resta
function realizarOperaciones() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById("resultado").textContent = "Por favor, ingresa todos los números.";
        return;
    }

    // Nuevas sumas y resta
    const sumaPrimera = num1 + num3; // Número 1 + Número 3
    const sumaSegunda = num2 + num4; // Número 2 + Número 4
    const resta = sumaPrimera - sumaSegunda; // Resta de las sumas

    document.getElementById("resultado").innerHTML = `
        Suma del Número 1 y Número 3: ${sumaPrimera} <br>
        Suma del Número 2 y Número 4: ${sumaSegunda} <br>
        Resta de las sumas: ${resta}
    `;
}
