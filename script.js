class HUE {
	importe(url = false, executar = function(){}) {
		if (Array.isArray(url)) {
			let carregados = 0;
			const pronto = () => {
				carregados++;
				if (carregados == url.length) {
					executar();
				}
			}
			for (let modulo in url) {
				this.importe(url[modulo], pronto);
			}
		} else {
			let script = document.createElement('script');
			script.src = url + '.js';
			script.onreadystatechange = executar;
			script.onload = executar;
			document.head.appendChild(script);
		}
	};
	
	classe(Modelo, atributos = {}) {
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

	constructor(dependencias = false, executar = function (){}) {
		if (dependencias) {
			this.importe(dependencias, executar);
		}
	}
}

let $ = new HUE([
	'estruturas/objeto',
	'estruturas/pilha',
	'estruturas/controleClasses'
], () => {
	let	controle = $.classe(ControleClasses);

	let objeto = controle.crie(Pilha, {'valores': 3});
	let arroz = controle.crie(Pilha, {'valores': 7});
	let pudim = controle.crie(Pilha, {'valores': 37});

	console.log(objeto);
	console.log(objeto.mostre());
	objeto.mude({'topo': 5});
	console.log(objeto.topo());
	console.log(controle.mostre('classes')[0].mostre());
});