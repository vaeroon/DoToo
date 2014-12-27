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
			this.all.push(new ToDo(text, false));
		};

		ToDoList.prototype.remove = function (todo) {
			var idx = this.all.indexOf(todo);
			if (idx > -1) {
				this.all.splice(idx, 1);
			}
		};

		return ToDoList;
	}
]);
