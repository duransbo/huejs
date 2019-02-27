class Pilha {
	constructor() {
		this.inicia({
			'topo': 0,
			'valores': []
		});
	}

	topo() {
		return this.mostre('valores')[this.mostre('topo') - 1];
	}

	empilhe(valor) {
		this.mude({
			'topo': this.incremente('topo'),
			'valores': this.adicione(valor, 'valores')
		});
	}

	desempilhe() {
		this.mude({
			'topo': this.decremente('topo'),
			'valores': this.retire('valores', this.mostre('topo') - 1)
		});
	}
}