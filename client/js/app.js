//ngRoute is for $routeProvider
//routeStyles is for individual css pages in each partial
//ngMessages is for form validation
var app = angular.module('myApp', ['ngRoute','routeStyles', 'ngMessages']);
app.config(function($routeProvider){

  $routeProvider

  .when('/', {

    templateUrl: 'partials/index.html',
    controller:  'storyController',
    css: 'css/main.css'
  }).when('/story', {

    templateUrl: 'partials/story.html',
    controller: 'storyController',
    css: 'css/story.css'

  }).when('/story/:id', {

    templateUrl: 'partials/story-path.html',
    controller: 'storyController',
    css: 'css/story.css'

  //route to root index
  }).when('/story/:id/edit', {

    templateUrl: 'partials/story-edit.html',
    controller: 'storyController',
    css: 'css/story.css'

  //route to root index
  }).when('/not-cool', {

    templateUrl: 'partials/not-cool.html',
    controller:  'storyController',
    css: 'css/main.css'

  }).otherwise({
    redirectTo: '/',
  });

});

app.service('storyService', function(){
  var storyGroup = [

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

    return storyGroup;
});
