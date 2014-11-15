'use strict';

angular.module('csInterviewApp')
  .factory('coloredShapes', function() {
    return {
      pad: function(n, width) {
        var colorStringWidth = 6;
        return n.length >= colorStringWidth ? n : new Array(colorStringWidth - n.length + 1).join('9') + n;
      },
      colorsAndShapes: function(string) {
        var colorsAndShapes = [],
          self = this;

        angular.forEach(string.split(''), function(value) {
          var charCode = value.charCodeAt(0),
            maxColorInteger = 6,
            numberOfShapes = 20,
            colors = ['#f00', '#f90', '#ff0', '#060', '#30c', '#90f'];

          colorsAndShapes.push({
            //color: '#' + self.pad((charCode % maxColorInteger).toString(16)),
            color: colors[charCode % maxColorInteger],
            shape: charCode % numberOfShapes + 1
          });
        });

        return colorsAndShapes;
      }
    };
  });