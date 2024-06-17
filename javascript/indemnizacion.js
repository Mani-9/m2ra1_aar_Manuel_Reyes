/**Definición de la clase Indemnizacion que calcula la indemnización laboral */
var Indemnizacion = /** @class */ (function () {
    function Indemnizacion() {
        /**Propiedades públicas de la clase */
        this.sueldoBase = 0;
        this.fechaContratacion = new Date();
        this.añosTrabajados = 0;
        this.mesesTrabajados = 0;
        this.bono14 = 0;
        this.aguinaldoProporcional = 0;
        this.salarioPendiente = 0;
        this.deudasCobrosPendientes = 0;
        this.totalIndemnizacion = 0;
    }
    Indemnizacion.prototype.asignarSueldoBase = function (valor) {
        this.sueldoBase = valor;
    };
    Indemnizacion.prototype.asignarFechaContratacion = function (valor) {
        this.fechaContratacion = valor;
    };
    /**Método para calcular los años trabajados basados en la fecha actual*/
    Indemnizacion.prototype.asignarAñosTrabajados = function () {
        var fechaActual = new Date();
        var añoActual = fechaActual.getFullYear();
        this.mesesTrabajados = (añoActual - this.fechaContratacion.getFullYear()) * 12 +
            (fechaActual.getMonth() - this.fechaContratacion.getMonth());
        this.añosTrabajados = Math.floor(this.mesesTrabajados / 12);
    };
    /**Método para calcular el Aguinaldo proporcional a pagar al trabajador*/
    Indemnizacion.prototype.calcularBono14 = function () {
        this.bono14 = (this.sueldoBase / 12) * this.mesesTrabajados;
    };
    Indemnizacion.prototype.calcularAguinaldoProporcional = function () {
        this.aguinaldoProporcional = (this.sueldoBase / 12) * this.mesesTrabajados;
    };
    Indemnizacion.prototype.calcularSalarioPendiente = function (valor) {
        this.salarioPendiente = valor;
    };
    Indemnizacion.prototype.calcularDeudasCobrosPendientes = function (valor) {
        this.deudasCobrosPendientes = valor;
    };
    /** Método para calcular el total de la indemnización a pagar al trabajador */
    Indemnizacion.prototype.calcularTotalIndemnizacion = function () {
        this.totalIndemnizacion = (this.sueldoBase * this.añosTrabajados) +
            this.bono14 +
            this.aguinaldoProporcional +
            this.salarioPendiente -
            this.deudasCobrosPendientes;
    };
    return Indemnizacion;
}());
// Cuando el DOM está completamente cargado, ejecutar las funciones de indemnización
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    // Crear una instancia de la clase Indemnizacion
    var indemnizacion = new Indemnizacion();
    // Obtener elementos del DOM para interactuar con ellos
    var ingresoSueldoBase = document.getElementById('inputsueldobase');
    var ingresoFechaContratacion = document.getElementById('inputFechaContratacion');
    var ingresoSalarioPendiente = document.getElementById('inputSalariopendiente');
    var ingresoDeudasCobrosPendientes = document.getElementById('inputDeudasCobrosPendientes');
    var resultadoBono14 = document.getElementById('inputBono14');
    var resultadoAguinaldoProporcional = document.getElementById('inputAguinaldo');
    var resultadoTotalIndemnizacion = document.getElementById('total');
    var inputCantidadAnos = document.getElementById('inputCantidadAños');
    // Función para obtener los valores de indemnización ingresados por el usuario
    function obtenerValoresDeIndemnizacion() {
        // Verificar que todos los campos requeridos estén llenos
        if (!ingresoSueldoBase.value || !ingresoFechaContratacion.value || !ingresoSalarioPendiente.value || !ingresoDeudasCobrosPendientes.value) {
            alert("Por favor, llene todos los campos");
            return false;
        }
        // Asignar los valores ingresados a la instancia de indemnización
        indemnizacion.asignarSueldoBase(parseFloat(ingresoSueldoBase.value));
        indemnizacion.asignarFechaContratacion(new Date(ingresoFechaContratacion.value));
        indemnizacion.asignarAñosTrabajados();
        indemnizacion.calcularBono14();
        indemnizacion.calcularAguinaldoProporcional();
        indemnizacion.calcularSalarioPendiente(parseFloat(ingresoSalarioPendiente.value));
        indemnizacion.calcularDeudasCobrosPendientes(parseFloat(ingresoDeudasCobrosPendientes.value));
        indemnizacion.calcularTotalIndemnizacion();
        return true;
    }
    // Agregar un listener al botón de calcular para ejecutar el cálculo de la indemnización
    (_a = document.getElementById('calcular')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        // Si se obtienen los valores de indemnización correctamente
        if (obtenerValoresDeIndemnizacion()) {
            // Mostrar los resultados calculados en los campos correspondientes del formulario
            resultadoBono14.value = indemnizacion.bono14.toFixed(2);
            resultadoAguinaldoProporcional.value = indemnizacion.aguinaldoProporcional.toFixed(2);
            resultadoTotalIndemnizacion.value = indemnizacion.totalIndemnizacion.toFixed(2);
            inputCantidadAnos.value = indemnizacion.añosTrabajados.toString();
        }
    });
});
