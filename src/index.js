import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';

const app = angular.module('foodApp', ['ngRoute', 'ngAnimate']);

app.controller('NavController', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    var active = viewLocation === $location.path();
    return active;
  };
});


app.config(function config($locationProvider, $routeProvider) {
  $routeProvider
  .when('/', {
    template: '<h1>Home</h1>'
  })
  .when('/recipes', {
    template: '<recipe-list></recipe-list>'
  })
  .when('/recipes/:recipeId', {
    template: '<recipe-detail></recipe-detail>'
  });
  $locationProvider.html5Mode(true);
});


app.component('recipeList', {
  templateUrl: '/templates/recipes.html',
  controller: function RecipeListController($scope, $http) {
    $http.get('api/recipes')
    .then(res => {
      $scope.recipes = res.data;
    });
    
    $scope.deleteRecipe = (index, recipeid) =>
    $http.delete(`/api/recipes/${recipeid}`)
    .then(() => $scope.recipes.splice(index, 1));
  }
});

app.component('recipeDetail', {
  templateUrl: '/templates/recipe.html',
  
  controller: function RecipeDetailController($http, $routeParams, $scope) {
    $http.get('api/recipes/' + $routeParams.recipeId).then(res => {
      ($scope.recipe = res.data);
      console.log($scope.recipe);
    });
  }
  
});
