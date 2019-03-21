const $ = (function() {
	const funda = function(destino, origem) {
		for (let key of Reflect.ownKeys(origem)) {
			if (key !== "constructor" && key !== "prototype" && key !== "name") {
				Object.defineProperty(destino, key, Object.getOwnPropertyDescriptor(origem, key));
			}
		}
	}
	
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
		
		mescle(destino, origem) {
			funda(destino, origem);
			funda(destino.prototype, origem.prototype);		
		}
		
		herde(...modelos) {			
			class Heranca {
				constructor(...atributos) {
					var i = 0;
					for (let modelo of modelos) {
						funda(this, new modelo(atributos[i++]));
					}
				}
			}
			
			for (let modelo of modelos) {
				this.mescle(Heranca, modelo);
			}
			
			return Heranca;
		}
		
		crie(Modelo, atributos = {}) {
			let ehIniciado = false;
			let privados;
			
			class Classe extends Modelo {
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
						console.error(`objeto [${this.constructor.name}] já iniciado`);
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