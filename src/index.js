import angular from 'angular';
import ngRoute from 'angular-route';

const app = angular.module('foodApp', ['ngRoute']);

app.component('recipeList', {
  template: `<div class="wrap"><h1>{{ name }} component</h1></div>`,
  controller: function RecipeListController($scope) {
    $scope.name = 'Recipe List'
  }
});