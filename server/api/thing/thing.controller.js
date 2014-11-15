/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');
var Character = require('../character/character.model');

// Get list of things
exports.index = function(req, res) {
  Thing.find(function(err, things) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, things);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return handleError(res, err);
    }
    if (!thing) {
      return res.send(404);
    }
    return res.json(thing);
  });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
  var characters = [];

  Thing.create(req.body, function(err, thing) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, thing);
  });

  //build query
  for (var key in req.body.name) {
    if (typeof characters[req.body.name[key]] === 'undefined') {
      characters[req.body.name[key]] = 1;
    } else {
      characters[req.body.name[key]] ++;
    }
  }

  //Search for entries
  Character.find({
    $or: Array.prototype.map.call(Object.keys(characters), function(character) {
      return {
        character: character
      }
    })
  }, function(err, results) {

    //Add New Entries
    var foundCharacters = Array.prototype.map.call(results, function(character) {
      return character.character;
    })

    for (var i in characters) {

      if (foundCharacters.indexOf(i) >= 0) {
        //Increment existing items
        Character.update({
          character: i
        }, {
          $inc: {
            count: characters[i]
          }
        }, {
          multi: false
        }, function() {

        });
      } else {
        //Create new characters
        Character.create({
          character: i,
          count: characters[i]
        })
      }
    }
  });
};

// Updates an existing thing in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return handleError(res, err);
    }
    if (!thing) {
      return res.send(404);
    }
    var updated = _.merge(thing, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, thing);
    });
  });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return handleError(res, err);
    }
    if (!thing) {
      return res.send(404);
    }
    thing.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}