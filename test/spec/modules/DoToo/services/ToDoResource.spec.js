describe('DoToo.Services.ToDoResource', function () {
	'use strict';

	var ToDoResource, LocalStorage, mockData;

	beforeEach(module('DoToo'));

	// register mock LocalStorage service
	beforeEach(module(function($provide){
		mockData = {foo: 100}
		LocalStorage = jasmine.createSpyObj('LocalStorage',['get', 'save']);
		LocalStorage.get.and.returnValue(mockData);
		$provide.service('DoToo.Services.LocalStorage', function() {
			return LocalStorage;
		});
	}));

	beforeEach(inject( function ($injector) {
		ToDoResource = $injector.get('DoToo.Services.ToDoResource');
	}));

	it('gets item from localstorage service', function () {
		expect(ToDoResource.get()).toBe(mockData);
		expect(LocalStorage.get).toHaveBeenCalled();
	});

	it('sets item into localstorage service', function () {
		var obj = {abc: 50};
		ToDoResource.save(obj);
		expect(LocalStorage.save).toHaveBeenCalledWith(obj);
	});
});
