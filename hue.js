const $ = (function() {
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
					const clone = (objeto, retorno = {}, i = 0) => {
						let valor = objeto[Object.keys(objeto)[i]];

						return i == Object.keys(objeto).length ? 
							retorno : clone(objeto, {
								...retorno,
								[Object.keys(objeto)[i]] : valor === null || (typeof valor == 'object' && !Array.isArray(valor)) ?
									clone(valor) : valor
							}, i+1);
					}

					let clonado = clone(privados);
					return atributo === null ? clonado : clonado[atributo];
				}
				mude(valor = {}, atributo = false) {
					if (atributo) {
						this.mude({[atributo]: valor});
					} else {
						Object.assign(privados, valor);
					}
					return this;
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
	}

	return Object.freeze(new HUE());
})();