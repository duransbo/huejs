class Vetor {
	ultimo(atributo) {
		return this.tamanho(atributo) - 1;		
	}
	tamanho(atributo) {
		return this.mostre(atributo).length;
	}	
}

class Lista extends Vetor {
    adicione(valor, atributo) {
        let valores = this.mostre(atributo);
        valores.push(valor);
        return valores;
    }
    retire(atributo, posicao) {
        let valores = this.mostre(atributo);
		valores.splice(posicao, 1);
        return valores;
    }
}

class Ponteiro extends Vetor {
    incremente(atributo) {
        this.mude(this.mostre(atributo) + 1, atributo);
    }
    decremente(atributo) {
        this.mude(this.mostre(atributo) - 1, atributo);
    }
};