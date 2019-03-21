class ControleClasses extends Lista {
	constructor() {
		super();
		this.inicia({'classes': []});
	}

	crie(Modelo, atributos) {
		let temp = $.crie(Modelo, atributos);
		this.mude(this.adicione(temp, 'classes'), 'classes');
		return temp;
	}
}