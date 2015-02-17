'use strict'

app.controller('storyController', function($scope, $location, $routeParams, storyService) {
	
	//hardcoded data for now
	$scope.storyGroup = storyService;

	if($routeParams.id){
		$scope.story = $scope.storyGroup[$routeParams.id];
	}

	$scope.editPath = function(data){
		console.log(data);
		// $scope.submitted = true;
		// console.log(storyGroup[$routeParams.id]);
		$scope.storyGroup[$routeParams.id] = data;
		// console.log($scope.story);
		// console.log(storyGroup[$routeParams.id]);
		$location.path('/story');
	}

});