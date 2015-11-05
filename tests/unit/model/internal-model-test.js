import DS from 'ember-data';

import {module, test} from 'qunit';

module("unit/model/internal-model - Internal Model");

var mockModelFactory = {
  _create: function() {
    return { trigger: function() {} };
  },

  eachRelationship: function() {
  }
};
test("Materializing a model twice errors out", function(assert) {
  assert.expect(1);
  var internalModel = new DS.InternalModel(mockModelFactory, null, null, null);

  internalModel.materializeRecord();
  assert.expectAssertion(function() {
    internalModel.materializeRecord();
  }, /more than once/);
});
