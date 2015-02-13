app.controller('storyController', function($scope) {
	$scope.story = [
		{title:'Trogdor', author:'Strongbad', content:'Drawing syballant S, then make-a-de-strong-arms..'},
		{title:'The Duke of Awesome', author:'B.Stinson', content:'Come hither, and relishg in my awe...'},
		{title:'Ghost Hunt', author:'Boo', content:'Scary stuff within my friends...be forewarned'},
		{title:'Game of Phones', author:'G.Man', content:'What happens when you play the game of phones...'},
		{title:'Titans GO', author:'T.Titans', content:'You choose who these kids fight!'},
	];

	$scope.addStory = function(){
		$scope.story.push($scope.newStory);
		$scope.newStory  = {};

	}
});