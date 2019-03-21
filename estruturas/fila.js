class Fila extends $.herde(Lista, Ponteiro) {
	constructor() {
		super();
		this.inicia({
			'tamanho': 0,
			'valores': []
		});
	}
	
	proximo() {
		return this.mostre('valores')[0];
	}

	enfileire(valor) {
		this.mude({
			'tamanho': this.incremente('tamanho'),
			'valores': this.adicione(valor, 'valores')
		});
		return this;
	}

	desenfileire() {
		this.mude({
			'tamanho': this.incremente('tamanho'),
			'valores': this.retire('valores', 0)
		});
		return this;
	}
}