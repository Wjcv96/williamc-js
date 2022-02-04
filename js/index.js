
let edadParaReservar = prompt("Por favor ingresar edad; Recuerde si es menor de 18, no puede reservar")

if (edadParaReservar < 18){
	alert("No tiene la edad suficiente para reservar")
} else {
	alert("Puede continuar con su reserva")
}

class Servicio {
	constructor(nombre, costo, horario){
		this.costo = costo
		this.horario = horario
		this.nombre = nombre
	}
}

class Compra {
	constructor () {
		this.subtotal = 0
		this.totalCompra = 0
		this.totalImpuesto = 1.19
	}

	servicioElegido(servicio){
		this.subtotal = this.subtotal + servicio.costo
		this.totalCompra = this.subtotal * this.totalImpuesto
		this.totalImpuesto = this.totalCompra - this.subtotal
	}
}

function contenedor() {
	console.log("Gracias por preferir JMW Travel")
	let servicio1 = new Servicio("Guianza", 120, "16:00 H")
	let servicio2 = new Servicio("hospedaje", 280, "11:00 H")
	let servicio3 = new Servicio("transporte", 100, " 10:00 H - 20:00 H")
	let servicio4 = new Servicio("fiestas", 300, "20:00 H - 4:00 H") 

	let compra = new Compra()

}
	
contenedor()


