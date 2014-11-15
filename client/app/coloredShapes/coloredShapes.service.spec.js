'use strict';

describe('Service: coloredShapes', function() {

  // load the service's module
  beforeEach(module('csInterviewApp'));

  // instantiate service
  var coloredShapes;
  beforeEach(inject(function(_coloredShapes_) {
    coloredShapes = _coloredShapes_;
  }));

  it('should return the same set of shapes and colors for hello world every time', function() {
    expect(coloredShapes.colorsAndShapes('hello world')).toEqual([ { color : '#ff0', shape : 4 }, { color : '#90f', shape : 1 }, { color : '#f00', shape : 8 }, { color : '#f00', shape : 8 }, { color : '#060', shape : 11 }, { color : '#ff0', shape : 12 }, { color : '#90f', shape : 19 }, { color : '#060', shape : 11 }, { color : '#f00', shape : 14 }, { color : '#f00', shape : 8 }, { color : '#30c', shape : 0 } ]);
  });

  it('should return the same set of shapes and colors for any string every time', function() {
    expect(coloredShapes.colorsAndShapes('alvin cheung')).toEqual([ { color : '#f90', shape : 17 }, { color : '#f00', shape : 8 }, { color : '#30c', shape : 18 }, { color : '#060', shape : 5 }, { color : '#ff0', shape : 10 }, { color : '#ff0', shape : 12 }, { color : '#060', shape : 19 }, { color : '#ff0', shape : 4 }, { color : '#90f', shape : 1 }, { color : '#060', shape : 17 }, { color : '#ff0', shape : 10 }, { color : '#f90', shape : 3 } ]);
  });

});
