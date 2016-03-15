myApp.controller('FormCtrl', function($scope){
	console.log('FormCtrl funcionando!');

	$scope.pessoa = {
		name : 'Vagner',
		lastname : 'Gross',
		age : 28,
		phone : '555',
		email : 'teste@curso.br'
	}

});