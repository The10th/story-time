//ngRoute is for $routeProvider
//routeStyles is for individual css pages in each partial
//ngMessages is for form validation
var app = angular.module('myApp', ['ngRoute', 'routeStyles', 'ngMessages']);

app.config(function($routeProvider){

  $routeProvider

  .when('/', {

    templateUrl: 'partials/index.html',
    controller:  'StoryController',
    css: 'css/main.css'

  }).when('/add', {

    templateUrl: 'partials/add.html',
    controller: 'storyController',
    css: 'css/main.css'

  }).when('/start', {

    templateUrl: 'partials/start.html',
    controller: 'storyController',
    css: 'css/story.css'
  //route to root index
  }).when('/not-cool', {

    templateUrl: 'partials/not-cool.html',
    controller:  'StoryController',
    css: 'css/main.css'

  }).otherwise({
    redirectTo: '/',
  });

});
