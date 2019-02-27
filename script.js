$.importe([
	'estruturas/objeto',
	'estruturas/pilha',
	'estruturas/controleClasses'
], () => {
	let objeto = $.classe(Pilha, {'valores': []});

	console.log(objeto);
	console.log(objeto.mostre());
	objeto.empilhe(5);
	objeto.empilhe(7);
	console.log(objeto.topo());
	objeto.desempilhe();
	console.log(objeto.mostre());
});