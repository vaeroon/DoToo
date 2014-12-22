DoToo.service('DoToo.Services.ToDoService', [
	'DoToo.Services.ToDoResource',
	'DoToo.Models.ToDoList',
	function (ToDoResource, ToDoList) {
		'use strict';

		return {
			get: function () {
				var data = ToDoResource.get();
				return this.set(data);
			},
			set: function (data) {
				return new ToDoList(data);
			},
			save: function (obj) {
				ToDoResource.save(obj);
			}
		};
	}
]);
