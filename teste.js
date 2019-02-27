$.importe([
	'estruturas/objeto',
	'estruturas/pilha',
	'estruturas/controleClasses'
], () => {
	let controle = $.classe(ControleClasses);

	let objeto = controle.crie(Pilha, {'valores': 3});
	let arroz = controle.crie(Pilha, {'valores': 7});
	let pudim = controle.crie(Pilha, {'valores': 37});

	console.log(objeto);
	console.log(objeto.mostre());
	objeto.mude({'topo': 5});
	console.log(objeto.topo());
	console.log(controle.mostre());
	console.log(controle.mostre('classes')[0].mostre());
});