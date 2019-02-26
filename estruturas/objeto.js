class Objeto {
	constructor(modelo) {
		this.modelo = modelo;
	}

	chaves() {
		return Object.keys(this.modelo);
	}
	
	tamanho() {
		return this.chaves().length;
	}

	chave(i) {
		return this.chaves()[i];
	}

	valor(i) {
		return this.modelo[this.chave(i)];
	}

	clone(retorno = {}, i = 0) {
		return i == this.tamanho() ? 
			retorno : this.clone({
				...retorno,
				[this.chave(i)] : this.valor(i) === null || (typeof this.valor(i) == 'object' && !Array.isArray(this.valor(i))) ?
					new Objeto(this.valor(i)).clone() : this.valor(i)
			}, i+1);
	}
}