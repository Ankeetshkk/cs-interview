'use strict';

angular.module('csInterviewApp')
  .controller('MainCtrl', function($scope, $http, socket, coloredShapes) {
    $scope.newThingColorsAndShapes = [];
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }

      $scope.newThingColorsAndShapes = coloredShapes.colorsAndShapes($scope.newThing);

      $http.post('/api/things', {
        name: $scope.newThing
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