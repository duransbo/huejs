class ControleClasses {
	constructor() {
		this.inicia({'classes': []});
	}

	crie(Modelo, atributos) {
		let temp = new HUE().classe(Modelo, atributos);
		let classes = this.mostre('classes');
		classes.push(temp);
		this.mude(classes, 'classes');
		return temp;
	}
}