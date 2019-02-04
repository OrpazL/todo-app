// import react , { Component } from 'react';
import { observable, action, computed } from 'mobx';

import TodoService from './services/TodoService';

export default class Store {
    
    @observable
    filter = '';

    @observable
    todos = [];
    
    @computed get filteredTodos() {
        return this.filterTodos(this.filter) ;
    }

    @action
    filterTodos(filter) {
        return TodoService.filterTodos(this.todos, filter);
    }

    @action
    editTodo(todo) {
        const todoIdx = TodoService.getTodoIndexById(this.todos, todo._id);
        if (todoIdx !== -1) {
            this.todos[todoIdx] = {...todo};
        } else {
            this.todos.push(TodoService.createTodo(todo.value));
        }
    }

    @action
    clearCompleted() {
        this.todos = TodoService.clearCompleted(this.todos);
    }
}