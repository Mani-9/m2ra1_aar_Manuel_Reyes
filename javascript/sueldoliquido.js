var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
        this.salario = 0;
        this.bonificacion = 0;
        this.comisiones = 0;
        this.prestamoDescuento = 0;
        this.igss = 0;
        this.ahorro = 0;
        this.sueldoLiquido = 0;
        this.totalGanado = 0;
        this.totalDescuento = 0;
    }
    SueldoLiquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    SueldoLiquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    SueldoLiquido.prototype.asignarComisiones = function (valor) {
        this.comisiones = valor;
    };
    SueldoLiquido.prototype.asignarPrestamoDescuento = function (valor) {
        this.prestamoDescuento = valor;
    };
    SueldoLiquido.prototype.asignarAhorro = function (valor) {
        this.ahorro = valor;
    };
    SueldoLiquido.prototype.calcularIggs = function () {
        this.igss = this.salario * 0.0483;
        return "El total del IGSS es: Q".concat(this.igss.toFixed(2));
    };
    SueldoLiquido.prototype.calcularTotalGanado = function () {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return "El total ganado es: Q".concat(this.totalGanado.toFixed(2));
    };
    SueldoLiquido.prototype.calcularTotalDescuento = function () {
        this.totalDescuento = this.prestamoDescuento + this.igss + this.ahorro;
        return "El total de descuento es: Q".concat(this.totalDescuento.toFixed(2));
    };
    SueldoLiquido.prototype.calcularSueldoLiquido = function () {
        this.sueldoLiquido = this.totalGanado - this.totalDescuento;
        return "El sueldo l\u00EDquido es: Q".concat(this.sueldoLiquido.toFixed(2));
    };
    return SueldoLiquido;
}());
var sueldoLiquido = new SueldoLiquido();
var resultadoSueldoLiquido = document.getElementById('sueldoLiquido');
var resultadoIgss = document.getElementById('inputIgss');
var resultadoTotalGanado = document.getElementById('totalGanado');
var resultadoTotalDescuento = document.getElementById('totalDescuento');
function obtenerValores() {
    // Obtener los valores de los inputs
    var inputSalario = document.getElementById("inputSalario");
    var inputBonificacion = document.getElementById("inputBonificacion");
    var inputComisiones = document.getElementById("inputComisiones");
    var inputPrestamos = document.getElementById("inputPrestamos");
    var inputAhorro = document.getElementById("inputAhorro");
    // Verificar si alguno de los campos está vacío
    if (!inputSalario.value.trim() ||
        !inputBonificacion.value.trim() ||
        !inputComisiones.value.trim() ||
        !inputPrestamos.value.trim() ||
        !inputAhorro.value.trim()) {
        alert("Todos los campos deben estar llenos.");
        return false; // Retorna false si hay un campo vacío
    }
    // Asignar los valores a las propiedades de la clase
    sueldoLiquido.asignarSalario(parseFloat(inputSalario.value));
    sueldoLiquido.asignarBonificacion(parseFloat(inputBonificacion.value));
    sueldoLiquido.asignarComisiones(parseFloat(inputComisiones.value));
    sueldoLiquido.asignarPrestamoDescuento(parseFloat(inputPrestamos.value));
    sueldoLiquido.asignarAhorro(parseFloat(inputAhorro.value));
    return true; // Retorna true si todos los campos están llenos
}
function calcularSueldoLiquido() {
    if (obtenerValores()) { // Sólo continua si obtenerValores retorna true
        resultadoIgss.value = sueldoLiquido.calcularIggs();
        resultadoTotalGanado.textContent = sueldoLiquido.calcularTotalGanado();
        resultadoTotalDescuento.textContent = sueldoLiquido.calcularTotalDescuento();
        resultadoSueldoLiquido.textContent = sueldoLiquido.calcularSueldoLiquido();
    }
}
