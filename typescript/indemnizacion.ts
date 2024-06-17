/**Definición de la clase Indemnizacion que calcula la indemnización laboral */
class Indemnizacion {
    /**Propiedades públicas de la clase */
    public sueldoBase: number = 0;
    public fechaContratacion: Date = new Date();
    public añosTrabajados: number = 0;
    public mesesTrabajados: number = 0;
    public bono14: number = 0;
    public aguinaldoProporcional: number = 0;
    public salarioPendiente: number = 0;
    public deudasCobrosPendientes: number = 0;
    public totalIndemnizacion: number = 0;

    public asignarSueldoBase(valor: number): void {
        this.sueldoBase = valor;
    }

    public asignarFechaContratacion(valor: Date): void {
        this.fechaContratacion = valor;
    }
    /**Método para calcular los años trabajados basados en la fecha actual*/
    public asignarAñosTrabajados(): void {
        const fechaActual = new Date();
        const añoActual = fechaActual.getFullYear();

        this.mesesTrabajados = (añoActual - this.fechaContratacion.getFullYear()) * 12 +
            (fechaActual.getMonth() - this.fechaContratacion.getMonth());

        this.añosTrabajados = Math.floor(this.mesesTrabajados / 12);
    }
    /**Método para calcular el Aguinaldo proporcional a pagar al trabajador*/
    public calcularBono14(): void {
        this.bono14 = (this.sueldoBase / 12) * this.mesesTrabajados;
    }

    public calcularAguinaldoProporcional(): void {
        this.aguinaldoProporcional = (this.sueldoBase / 12) * this.mesesTrabajados;
    }

    public calcularSalarioPendiente(valor: number): void {
        this.salarioPendiente = valor;
    }

    public calcularDeudasCobrosPendientes(valor: number): void {
        this.deudasCobrosPendientes = valor;
    }
    /** Método para calcular el total de la indemnización a pagar al trabajador */
    public calcularTotalIndemnizacion(): void {
        this.totalIndemnizacion = (this.sueldoBase * this.añosTrabajados) +
            this.bono14 +
            this.aguinaldoProporcional +
            this.salarioPendiente -
            this.deudasCobrosPendientes;
    }
}
// Cuando el DOM está completamente cargado, ejecutar las funciones de indemnización
document.addEventListener('DOMContentLoaded', () => {
    // Crear una instancia de la clase Indemnizacion
    const indemnizacion = new Indemnizacion();

    // Obtener elementos del DOM para interactuar con ellos
    const ingresoSueldoBase = document.getElementById('inputsueldobase') as HTMLInputElement;
    const ingresoFechaContratacion = document.getElementById('inputFechaContratacion') as HTMLInputElement;
    const ingresoSalarioPendiente = document.getElementById('inputSalariopendiente') as HTMLInputElement;
    const ingresoDeudasCobrosPendientes = document.getElementById('inputDeudasCobrosPendientes') as HTMLInputElement;
    const resultadoBono14 = document.getElementById('inputBono14') as HTMLInputElement;
    const resultadoAguinaldoProporcional = document.getElementById('inputAguinaldo') as HTMLInputElement;
    const resultadoTotalIndemnizacion = document.getElementById('total') as HTMLTextAreaElement;
    const inputCantidadAnos = document.getElementById('inputCantidadAños') as HTMLInputElement;

    // Función para obtener los valores de indemnización ingresados por el usuario
    function obtenerValoresDeIndemnizacion(): boolean {
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
    document.getElementById('calcular')?.addEventListener('click', () => {
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