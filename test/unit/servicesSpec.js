'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));


  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });

});

describe('service', function() {
  beforeEach(module('main.services'));


  describe('fetchTasks', function() {
    it('should return current version', inject(function(fetchTask) {
      var task = fetchTask();
    }));
  });
  
});
