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

				//1ª ORDEM
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

				//2ª Ordem
				adicione(valor, atributo) {
					let valores = this.mostre(atributo);
					valores.push(valor);
					return valores;
				}
				retire(atributo, posicao) {
					let valores = this.mostre(atributo);
					valores.pop();
					return valores;
				}
				incremente(atributo) {
					return this.mostre(atributo) + 1;
				}
				decremente(atributo) {
					return this.mostre(atributo) - 1;
				}
			};
			return new Classe;
		};
	}

	return Object.freeze(new HUE());
})();