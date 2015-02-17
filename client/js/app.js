//ngRoute is for $routeProvider
//routeStyles is for individual css pages in each partial
//ngMessages is for form validation
var app = angular.module('myApp', ['ngRoute','routeStyles', 'ngMessages']);

app.config(function($routeProvider){

  $routeProvider

  .when('/', {

    templateUrl: 'partials/index.html',
    controller:  'storyController',
    css: 'css/main.css',
    reloadOnPath:false
  }).when('/story', {

    templateUrl: 'partials/story.html',
    controller: 'storyController',
    css: 'css/story.css',
    reloadOnPath:false

  }).when('/story/:id', {

    templateUrl: 'partials/story-path.html',
    controller: 'storyController',
    css: 'css/story.css',
    reloadOnPath:false

  //route to root index
  }).when('/story/:id/edit', {

    templateUrl: 'partials/story-edit.html',
    controller: 'storyController',
    css: 'css/story.css',
    reloadOnPath:false

  //route to root index
  }).when('/not-cool', {

    templateUrl: 'partials/not-cool.html',
    controller:  'storyController',
    css: 'css/main.css',
    reloadOnPath:false

  }).otherwise({
    redirectTo: '/',
  });

});
