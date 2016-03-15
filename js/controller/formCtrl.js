myApp.controller('FormCtrl', function($scope){
	console.log('FormCtrl funcionando!');

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;

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

	$scope.editarTarefa = function (data){
		console.log(data);

		$scope.indexTarefa = data;
		$scope.renomear = $scope.list[$scope.indexTarefa].nomeTarefa;

		$scope.clicouEditar = true;

	}

	$scope.renomearTarefa = function (data){

		var editObj = {};
		editObj = {
			'nomeTarefa': data,
			'dataTarefa': $scope.list[$scope.indexTarefa].dataTarefa
		}

		$scope.list[$scope.indexTarefa] = editObj;
		$scope.renomear = undefined;
		$scope.clicouEditar = false;

	}


});