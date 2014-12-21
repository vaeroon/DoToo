DoToo.service('DoToo.Services.LocalStorage', [
	'$rootScope',
	function ($rootScope) {
		'use strict';

		window.addEventListener('storage', function (evt) {
			$rootScope.$emit('DoToo.update', {todos: evt.newValue});
			$rootScope.$apply();
		}, false);

		return {
			get: function () {
				return JSON.parse(localStorage.getItem('DoToo.todos'));
			},
			save: function (todos) {
				localStorage.setItem('DoToo.todos', JSON.stringify(todos));
			}
		};
	}
]);
