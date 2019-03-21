class Pilha extends Lista {
	constructor() {
		super();
		this.inicia({
			'valores': []
		});
	}

	topo() {
		return this.mostre('valores')[this.ultimo('valores')];
	}

	empilhe(valor) {
		this.mude({
			'valores': this.adicione(valor, 'valores')
		});
		return this;
	}

	desempilhe() {
		this.mude({
			'valores': this.retire('valores', this.ultimo('valores'))
		});
		return this;
	}
}