myApp.controller('FormCtrl', function($scope){
	console.log('FormCtrl funcionando!');

	$scope.pessoa = {
		name : 'Vagner',
		lastname : 'Gross',
		age : 28,
		phone : '555',
		email : 'teste@curso.br'
	}

	$scope.list = [
		{
			nomeTarefa : 'Tarefa Teste',
			dataTarefa : '2016-03-15T18:45:31.000Z'
		},
		{
			nomeTarefa : 'Cortar a grama',
			dataTarefa : '2016-03-15T18:45:31.000Z'
		},
		{
			nomeTarefa : 'Limpar a casa',
			dataTarefa : '2016-03-15T18:45:31.000Z'
		},
		{
			nomeTarefa : 'Carpi o lote',
			dataTarefa : '2016-03-15T18:45:31.000Z'
		},
		{
			nomeTarefa : 'Lavar o carro',
			dataTarefa : '2016-03-15T18:45:31.000Z'
		}
	];

	$scope.cadastrarTarefa = function (data){
		console.log(data);

		if (data) {
			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()
			});		
		}

		
		$scope.task = undefined;
	}

});