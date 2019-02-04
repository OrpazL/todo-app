import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.scss';

import SearchBar from './cmps/SearchBar/SearchBar';
import TodoList from './cmps/TodoList/TodoList';
import { observable } from 'mobx';

@inject('store')
@observer
class App extends Component {
	@observable
	todos = this.props.store.filteredTodos;

  clearCompleted() {
    this.props.store.clearCompleted();
  }

	render() {
		return (
			<div className="app">
				<h1 className="main-title">Todos App</h1>
				<SearchBar />
				{this.todos.map(todo => {
					return JSON.stringify(todo);
				})}
				<TodoList todos={this.todos} />
        <a href="#" onClick={this.clearCompleted}>CLEAR COMPLETED</a>
			</div>
		);
	}
}

export default App;
