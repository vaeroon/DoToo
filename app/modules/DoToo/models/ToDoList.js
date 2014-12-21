DoToo.factory('DoToo.Models.ToDoList', [
	'DoToo.Models.ToDo',
	function (ToDo) {
		'use strict';

		function ToDoList (arr) {
			this.all = (arr || []).map(function (obj) {
				return new ToDo(obj);
			});
		}

		ToDoList.prototype.add = function (text) {
			this.todos.push(new ToDo(text, false));
		};

		ToDoList.prototype.remove = function (todo) {
			this.todos.splice(this.todos.indexOf(todo));
		};

		return ToDoList;
	}
]);
