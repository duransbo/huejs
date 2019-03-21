$.importe([
	'huex',
	'estruturas/controleClasses',
	'estruturas/pilha',
	'estruturas/fila'
], () => {
	let controle = $.crie(ControleClasses);
	console.log(controle);
	console.log(controle.mostre());
	
	let objeto = controle.crie(Pilha);

	console.log(objeto);
	objeto.empilhe(5);
	objeto.empilhe(7);
	objeto.empilhe(9);
	objeto.empilhe(11);
	objeto.desempilhe();
	console.log(objeto.topo());
	
	let objeto2 = controle.crie(Fila);

	console.log(objeto2);
	objeto2.enfileire(10);
	objeto2.enfileire(9);
	objeto2.enfileire(8);
	objeto2.enfileire(7);
	objeto2.desenfileire();
	console.log(objeto2.proximo());
	
	let objeto3 = controle.crie(Pilha);

	console.log(objeto3);
	objeto3.empilhe(1);
	objeto3.empilhe(2);
	objeto3.empilhe(3);
	objeto3.empilhe(4);
	objeto3.desempilhe();
	console.log(objeto3.topo());
	
	console.log(controle.mostre());
	console.log(objeto.mostre('valores'));
	console.log(objeto2.mostre('valores'));
	console.log(objeto3.mostre('valores'));
	objeto.empilhe(15);
	console.log(objeto.mostre('valores'));
	
	objeto.teste = 'oi';
	console.log(objeto);
	
});