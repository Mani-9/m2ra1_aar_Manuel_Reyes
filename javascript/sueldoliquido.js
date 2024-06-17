/**Definición de la clase SueldoLiquido para calcular el sueldo líquido de un empleado */
var SueldoLiquido = /** @class */ (function () {
    function SueldoLiquido() {
        /**Propiedades privadas que almacenan los valores para el cálculo */
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
    /**Método para calcular la contribución al IGSS */
    SueldoLiquido.prototype.calcularIggs = function () {
        this.igss = this.salario * 0.0483;
        return this.igss;
    };
    /**Método para calcular el total ganado antes de descuentos */
    SueldoLiquido.prototype.calcularTotalGanado = function () {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return this.totalGanado;
    };
    /**Método para calcular el total de descuentos */
    SueldoLiquido.prototype.calcularTotalDescuento = function () {
        this.totalDescuento = this.prestamoDescuento + this.igss + this.ahorro;
        return this.totalDescuento;
    };
    /**Método para calcular el sueldo líquido después de descuentos */
    SueldoLiquido.prototype.calcularSueldoLiquido = function () {
        this.sueldoLiquido = this.totalGanado - this.totalDescuento;
        return this.sueldoLiquido;
    };
    return SueldoLiquido;
}());
/**Crear una instancia de la clase SueldoLiquido*/
var sueldoLiquido = new SueldoLiquido();
/**Funciones para obtener los valores de los inputs y mostrar los resultados en el DOM*/
var resultadoSueldoLiquido = document.getElementById('sueldoLiquido');
var resultadoIgss = document.getElementById('inputIgss');
var resultadoTotalGanado = document.getElementById('totalGanado');
var resultadoTotalDescuento = document.getElementById('totalDescuento');
/**Función para obtener y validar los valores de entrada del usuario */
function obtenerValores() {
    var inputs = ["inputSalario", "inputBonificacion", "inputComisiones", "inputPrestamos", "inputAhorro"];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var id = inputs_1[_i];
        var input = document.getElementById(id);
        if (input.value.trim() === "" || isNaN(parseFloat(input.value))) {
            alert("Por favor, llene todos los campos con valores numéricos válidos");
            return false;
        }
    }
    sueldoLiquido.asignarSalario(parseFloat(document.getElementById("inputSalario").value));
    sueldoLiquido.asignarBonificacion(parseFloat(document.getElementById("inputBonificacion").value));
    sueldoLiquido.asignarComisiones(parseFloat(document.getElementById("inputComisiones").value));
    sueldoLiquido.asignarPrestamoDescuento(parseFloat(document.getElementById("inputPrestamos").value));
    sueldoLiquido.asignarAhorro(parseFloat(document.getElementById("inputAhorro").value));
    return true;
}
/*Función para calcular y mostrar el sueldo líquido después de descuentos */
function calcularSueldoLiquido() {
    if (obtenerValores()) {
        var igss = sueldoLiquido.calcularIggs();
        resultadoIgss.value = igss.toFixed(2);
        resultadoTotalGanado.textContent = sueldoLiquido.calcularTotalGanado().toFixed(2);
        resultadoTotalDescuento.textContent = sueldoLiquido.calcularTotalDescuento().toFixed(2);
        resultadoSueldoLiquido.textContent = sueldoLiquido.calcularSueldoLiquido().toFixed(2);
    }
}
