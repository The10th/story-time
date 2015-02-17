'use strict'

app.controller('storyController', function($scope, $location, $routeParams) {
	
	//hardcoded data for now
	$scope.storyGroup = [

		//begin story
		{id: 0, path:'Starting Path', title:'Start', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:1, path:'Path1', title:'Title 1', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:2, path:'Path2', title:'Title 2', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:3, path:'Path3', title:'Title 3', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:4, path:'Path4', title:'Title 4', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:5, path:'Path5', title:'Title 5', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:6, path:'Path6', title:'Title 6', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2},

		{id:7, path:'Path7', title:'Title 7', content: 'Migas Shoreditch flannel, asymmetrical vegan skateboard kitsch. Retro fashion axe Echo Park twee put a bird on it vinyl. Helvetica Wes  Anderson ugh Truffaut leggings single-origin coffee. Small batch cronut Williamsburg, wolf cardigan sriracha 90', choice1:1, choice2: 2}
	];

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