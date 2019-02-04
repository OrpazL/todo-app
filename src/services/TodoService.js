function filterTodos(todos = [], filter = '') {
    if (!filter.length) return todos;
    const matches = new RegExp(filter, 'i');
	return todos.filter(todo => matches.test(todo.value));
}

function editTodo(todo) {
	if (todo._id) {
	}
}

function getTodoIndexById(todos, id) {
	return todos.findIndex(todo => todo._id === id);
}

function createTodo(value) {
    return {
        _id: _makeId(),
        value,
        isCompleted: false
    }
}

function clearCompleted(todos) {
    return todos.filter(todo => !todo.isCompleted)
}

export default {
	filterTodos,
	editTodo,
    getTodoIndexById,
    createTodo
};

function _makeId(length = 5) {
	var txt = '';
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return txt;
}
