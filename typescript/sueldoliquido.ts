class SueldoLiquido {
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

    public calcularIggs(): string {
        this.igss = this.salario * 0.0483;
        return `El total del IGSS es: Q${this.igss.toFixed(2)}`;
    }

    public calcularTotalGanado(): string {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return `El total ganado es: Q${this.totalGanado.toFixed(2)}`;
    }

    public calcularTotalDescuento(): string {
        this.totalDescuento = this.prestamoDescuento + this.igss + this.ahorro;
        return `El total de descuento es: Q${this.totalDescuento.toFixed(2)}`;
    }

    public calcularSueldoLiquido(): string {
        this.sueldoLiquido = this.totalGanado - this.totalDescuento;
        return `El sueldo líquido es: Q${this.sueldoLiquido.toFixed(2)}`;
    }
}

const sueldoLiquido = new SueldoLiquido();
const resultadoSueldoLiquido = document.getElementById('sueldoLiquido') as HTMLTextAreaElement;
const resultadoIgss = document.getElementById('inputIgss') as HTMLInputElement;
const resultadoTotalGanado = document.getElementById('totalGanado') as HTMLTextAreaElement;
const resultadoTotalDescuento = document.getElementById('totalDescuento') as HTMLTextAreaElement;

function obtenerValores(): boolean {
    // Obtener los valores de los inputs
    const inputSalario = document.getElementById("inputSalario") as HTMLInputElement;
    const inputBonificacion = document.getElementById("inputBonificacion") as HTMLInputElement;
    const inputComisiones = document.getElementById("inputComisiones") as HTMLInputElement;
    const inputPrestamos = document.getElementById("inputPrestamos") as HTMLInputElement;
    const inputAhorro = document.getElementById("inputAhorro") as HTMLInputElement;

    // Verificar si alguno de los campos está vacío
    if (
        !inputSalario.value.trim() ||
        !inputBonificacion.value.trim() ||
        !inputComisiones.value.trim() ||
        !inputPrestamos.value.trim() ||
        !inputAhorro.value.trim()
    ) {
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
