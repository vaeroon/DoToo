describe('DoToo.Services.LocalStorage', function () {
	'use strict';

	var LocalStorage;

	beforeEach(module('DoToo'));

	beforeEach(inject( function ($injector) {
		LocalStorage = $injector.get('DoToo.Services.LocalStorage');
	}));

	it('gets item from localstorage', function () {
		spyOn(localStorage, 'getItem').and.returnValue('{"foo": 100}');
		expect(LocalStorage.get()).toEqual({foo: 100});
		expect(localStorage.getItem).toHaveBeenCalledWith('DoToo.todos');
	});

	it('sets item into localstorage', function () {
		spyOn(localStorage, 'setItem');
		var obj = {foo: 100};
		LocalStorage.save(obj);
		expect(localStorage.setItem).toHaveBeenCalledWith('DoToo.todos', JSON.stringify(obj));
	});

	// TODO: verify the storage listener behavior
});
