class ControleClasses extends HUEX {
	constructor() {
		super();
		this.inicia({'classes': []});
	}

	crie(Modelo, atributos) {
		let temp = $.classe(Modelo, atributos);
		this.mude(this.adicione(temp, 'classes'), 'classes');
		return temp;
	}
}