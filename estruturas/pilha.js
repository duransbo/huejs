class Pilha {
	constructor() {
		//Objeto totalmente configurável
		let modelo = {
			'topo': 0,
			'valores': []
		};

		//Iniciação do objeto utilizando as configurações
		this.inicia(modelo);
	}

	topo() {
		return this.mostre('topo');
	}
}