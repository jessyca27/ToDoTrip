'use strict';

describe('todoTrip.information module', function() {

  beforeEach(module('todoTrip.information'));

  describe('InformationCtrl controller', function(){

    var scope, createController, routeParams, httpBackend, service;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $routeParams) {
      scope = $rootScope.$new();
      routeParams = $routeParams;
      httpBackend = $httpBackend;

      /*$httpBackend.when('GET', 'data/clothes.json')
          .respond(200, {clothesList : "Ok !"});*/


      createController = function() {
        return $controller('InformationCtrl', {
          '$scope': scope
        });
      };

    }));

    it('Le controller doit être défini', function() {
      var controller = createController();
      expect(controller).toBeDefined();
    });
  });
});