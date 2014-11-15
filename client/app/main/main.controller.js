'use strict';

angular.module('csInterviewApp')
  .controller('MainCtrl', function($scope, $http, socket, coloredShapes) {
    $scope.newThingColorsAndShapes = [];
    $scope.awesomeThings = [];
    $scope.charactersAndCounts = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;

      socket.syncUpdates('thing', $scope.awesomeThings, function() {
        $http.get('/api/characters').success(function(charactersAndCounts) {
          $scope.charactersAndCounts = charactersAndCounts;
        });
      });
    });

    $http.get('/api/characters').success(function(charactersAndCounts) {
      $scope.charactersAndCounts = charactersAndCounts;
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }

      //Get colors and shapes to display to the user
      $scope.newThingColorsAndShapes = coloredShapes.colorsAndShapes($scope.newThing);

      $http.post('/api/things', {
        name: $scope.newThing,
      });

      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  });