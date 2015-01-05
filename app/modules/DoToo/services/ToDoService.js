DoToo.service('DoToo.Services.ToDoService', [
	'DoToo.Services.ToDoResource',
	'DoToo.Models.ToDoList',
	function (ToDoResource, ToDoList) {
		'use strict';

		var todos = null;
		return {
			get: function () {
				var data = ToDoResource.get();
				return this.set(data);
			},
			set: function (data) {
				todos = new ToDoList(data);
				return todos.all;
			},
			save: function () {
				ToDoResource.save(todos.all);
			},
			add: function (todo) {
				todos.add(todo);
				this.save();
			},
			remove: function (id) {
				todos.remove(id);
				this.save();
			},
			lastUpdated: + new Date()
		};
	}
]);
