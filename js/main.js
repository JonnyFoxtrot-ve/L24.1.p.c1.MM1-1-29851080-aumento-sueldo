import Cl_empleado from "./Cl_empleado.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleado("Juan", 2, 100);
let empleado2 = new Cl_empleado("Ana", 2, 120);
let empleado3 = new Cl_empleado("Lin", 1, 200);
let empleado4 = new Cl_empleado("Mary", 2, 50);
let empleado5 = new Cl_empleado("Carlos", 1, 150);

let empresa = new Cl_empresa();

empresa.procesare(empleado1);
empresa.procesare(empleado2);
empresa.procesare(empleado3);
empresa.procesare(empleado4);
empresa.procesare(empleado5);

let salida = document.getElementById("salida");
salida.innerHTML += `<br> ${
  empleado1.nombre
} tiene un aumento de ${empleado1.aumentoSueldo()}$`;
salida.innerHTML += `<br> ${
  empleado2.nombre
} tiene un aumento de ${empleado2.aumentoSueldo()}$`;
salida.innerHTML += `<br> ${
  empleado3.nombre
} tiene un aumento de ${empleado3.aumentoSueldo()}$`;
salida.innerHTML += `<br> ${
  empleado4.nombre
} tiene un aumento de ${empleado4.aumentoSueldo()}$`;
salida.innerHTML += `<br> ${
  empleado5.nombre
} tiene un aumento de ${empleado5.aumentoSueldo()}$`;
salida.innerHTML += `<br> El total de monto adicional que debe pagar la empresa es de ${empresa.montoADicional()}$`;
