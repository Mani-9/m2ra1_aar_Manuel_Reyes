/**Definición de la clase SueldoLiquido para calcular el sueldo líquido de un empleado */
class SueldoLiquido {
    /**Propiedades privadas que almacenan los valores para el cálculo */
    private salario: number = 0;
    private bonificacion: number = 0;
    private comisiones: number = 0;
    private prestamoDescuento: number = 0;
    private igss: number = 0;
    private ahorro: number = 0;
    private sueldoLiquido: number = 0;
    private totalGanado: number = 0;
    private totalDescuento: number = 0;

    public asignarSalario(valor: number): void {
        this.salario = valor;
    }

    public asignarBonificacion(valor: number): void {
        this.bonificacion = valor;
    }

    public asignarComisiones(valor: number): void {
        this.comisiones = valor;
    }

    public asignarPrestamoDescuento(valor: number): void {
        this.prestamoDescuento = valor;
    }

    public asignarAhorro(valor: number): void {
        this.ahorro = valor;
    }
    /**Método para calcular la contribución al IGSS */
    public calcularIggs(): number {
        this.igss = this.salario * 0.0483;
        return this.igss;
    }
    /**Método para calcular el total ganado antes de descuentos */
    public calcularTotalGanado(): number {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return this.totalGanado;
    }
    /**Método para calcular el total de descuentos */
    public calcularTotalDescuento(): number {
        this.totalDescuento = this.prestamoDescuento + this.igss + this.ahorro;
        return this.totalDescuento;
    }
    /**Método para calcular el sueldo líquido después de descuentos */
    public calcularSueldoLiquido(): number {
        this.sueldoLiquido = this.totalGanado - this.totalDescuento;
        return this.sueldoLiquido;
    }
}
/**Crear una instancia de la clase SueldoLiquido*/
const sueldoLiquido = new SueldoLiquido();
/**Funciones para obtener los valores de los inputs y mostrar los resultados en el DOM*/
const resultadoSueldoLiquido = document.getElementById('sueldoLiquido') as HTMLTextAreaElement;
const resultadoIgss = document.getElementById('inputIgss') as HTMLInputElement;
const resultadoTotalGanado = document.getElementById('totalGanado') as HTMLTextAreaElement;
const resultadoTotalDescuento = document.getElementById('totalDescuento') as HTMLTextAreaElement;
/**Función para obtener y validar los valores de entrada del usuario */
function obtenerValores(): boolean {
    const inputs = ["inputSalario", "inputBonificacion", "inputComisiones", "inputPrestamos", "inputAhorro"];
    for (let id of inputs) {
        const input = document.getElementById(id) as HTMLInputElement;
        if (input.value.trim() === "" || isNaN(parseFloat(input.value))) {
            alert("Por favor, llene todos los campos con valores numéricos válidos");
            return false;
        }
    }

    sueldoLiquido.asignarSalario(parseFloat((document.getElementById("inputSalario") as HTMLInputElement).value));
    sueldoLiquido.asignarBonificacion(parseFloat((document.getElementById("inputBonificacion") as HTMLInputElement).value));
    sueldoLiquido.asignarComisiones(parseFloat((document.getElementById("inputComisiones") as HTMLInputElement).value));
    sueldoLiquido.asignarPrestamoDescuento(parseFloat((document.getElementById("inputPrestamos") as HTMLInputElement).value));
    sueldoLiquido.asignarAhorro(parseFloat((document.getElementById("inputAhorro") as HTMLInputElement).value));

    return true;
}
/*Función para calcular y mostrar el sueldo líquido después de descuentos */
function calcularSueldoLiquido() {
    if (obtenerValores()) {
        const igss = sueldoLiquido.calcularIggs();
        resultadoIgss.value = igss.toFixed(2);

        resultadoTotalGanado.textContent = sueldoLiquido.calcularTotalGanado().toFixed(2);
        resultadoTotalDescuento.textContent = sueldoLiquido.calcularTotalDescuento().toFixed(2);
        resultadoSueldoLiquido.textContent = sueldoLiquido.calcularSueldoLiquido().toFixed(2);
    }
}
