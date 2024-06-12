class SueldoLiquido {
    // Propiedad que almacena el salario base
    private salario: number = 0;
    // Propiedad que almacena la bonificación
    private bonificacion: number = 0;
    // Propiedad que almacena las comisiones
    private comisiones: number = 0;
    // Propiedad que almacena el préstamo o descuento
    private prestamoDescuento: number = 0;
    // Propiedad que almacena el IGSS
    private igss: number = 0;
    // Propiedad que almacena el ahorro
    private ahorro: number = 0;
    // Propiedad que almacena el sueldo líquido
    private sueldoLiquido: number = 0;
    // Propiedad que almacena el total ganado
    private totalGanado: number = 0;
    // Propiedad que almacena el total de descuentos
    private totalDescuento: number = 0;

    //Método para asignar el valor del salario
    public asignarSalario(valor: number): void {
        this.salario = valor;
    }
    //Método para asignar el valor de la bonificación
    public asignarBonificacion(valor: number): void {
        this.bonificacion = valor;
    }
    //Método para asignar el valor de las comisiones
    public asignarComisiones(valor: number): void {
        this.comisiones = valor;
    }
    //Método para asignar el valor del préstamo o descuento
    public asignarPrestamoDescuento(valor: number): void {
        this.prestamoDescuento = valor;
    }
    //Método para asignar el valor del ahorro
    public asignarAhorro(valor: number): void {
        this.ahorro = valor;
    }
    //Método para calcular el IGSS
    public calcularIggs(): string {
        this.igss = this.salario * 0.0483;
        return `El total del IGSS es: Q${this.igss.toFixed(2)}`;
    }
    //  Método para calcular el total ganado
    public calcularTotalGanado(): string {
        this.totalGanado = this.salario + this.bonificacion + this.comisiones;
        return this.totalGanado.toFixed(2);
    }
    //  Método para calcular el total de descuentos
    public calcularTotalDescuento(): string {
        this.totalDescuento = this.prestamoDescuento + this.igss + this.ahorro;
        return this.totalDescuento.toFixed(2);
    }
    //  Método para calcular el sueldo líquido
    public calcularSueldoLiquido(): string {
        this.sueldoLiquido = this.totalGanado - this.totalDescuento;
        return this.sueldoLiquido.toFixed(2);
    }
}

// Instancia de la clase SueldoLiquido
const sueldoLiquido = new SueldoLiquido();

// Referencia a los elementos HTML para mostrar resultados
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
    if (inputSalario.value === "" || inputBonificacion.value === "" || inputComisiones.value === "" || inputPrestamos.value === "" || inputAhorro.value === "") {
        alert("Por favor, llene todos los campos");
        return false; // Retorna false si algún campo está vacío
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
    if (obtenerValores()) { // Solo continúa si obtenerValores retorna true
        // Calcular el IGSS y extraer solo el valor numérico
        const igss = sueldoLiquido.calcularIggs();
        resultadoIgss.value = igss.split(': Q')[1]; // Extraer solo el valor numérico y asignarlo al input

        // Mostrar el total ganado en el cuadro de texto correspondiente
        resultadoTotalGanado.textContent = sueldoLiquido.calcularTotalGanado();

        // Mostrar el total de descuentos en el cuadro de texto correspondiente
        resultadoTotalDescuento.textContent = sueldoLiquido.calcularTotalDescuento();

        // Mostrar el sueldo líquido en el cuadro de texto correspondiente
        resultadoSueldoLiquido.textContent = sueldoLiquido.calcularSueldoLiquido();
    }
}
