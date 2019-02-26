class Objeto {
	constructor(modelo) {
		//const clone = (o, r = {}, i = 0) => i == Object.keys(o).length ? r : clone(o, {...r, [Object.keys(o)[i]] : typeof o[Object.keys(o)[i]] == 'object' ? clone(o[Object.keys(o)[i]]) : o[Object.keys(o)[i]]}, ++i);
		this.modelo = modelo;//clone(modelo);
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

let criaClasse = function (Modelo, atributos = {}) {
	let ehIniciado = false;
	let privados;
	class Classe extends Modelo {
		constructor() {
			super();
			if (!ehIniciado) {
				console.error(`objeto [${this.constructor.__proto__.name}] ainda não foi iniciado`);
			}
		}
		mostre(atributo = null) {
			let clone = new Objeto(privados).clone();
			return atributo === null ? clone : clone[atributo];a;
		}
		mude(valor = {}, atributo = false) {
			if (atributo) {
				this.mude({[atributo]: valor});
			} else {
				Object.assign(privados, valor);
			}
		}
		inicia(modelo) {
			if (ehIniciado) {
				console.error(`objeto [${this.constructor.__proto__.name}] já iniciado`);
			} else {
				privados = Object.seal(modelo);
				this.mude(atributos);
				ehIniciado = true;
			}
		}
	};
	return new Classe;
};

class ControleClasses {
	constructor() {
		this.inicia({'classes': []});
	}

	crie(Modelo, atributos) {
		let temp = criaClasse(Modelo, atributos);
		let classes = this.mostre('classes');
		classes.push(temp);
		this.mude(classes, 'classes');
		return temp;
	}
}
let $ = criaClasse(ControleClasses);

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


//Sintaxe para criação de objetos
let objeto = $.crie(Pilha, {'valores': 3});
let arroz = $.crie(Pilha, {'valores': 7});
let pudim = $.crie(Pilha, {'valores': 37});

console.log(objeto);
console.log(objeto.mostre());
objeto.mude({'topo': 5});
console.log(objeto.topo());
console.log($.mostre('classes')[0].mostre());
