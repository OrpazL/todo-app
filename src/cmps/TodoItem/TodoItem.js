import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import './TodoItem.scss';

@inject('store')
class TodoItem extends Component {

    @observable
    todo = this.props.todo;
    
    state = {
		value: this.todo.value
    };
          
	handleChange(ev) {
		this.todo.isCompleted = ev.target.checked;
    }

	async editTodo(ev) {
        ev.preventDefault();
        const { store , todo } = this.props;
        store.editTodo({ ...todo, ...this.state });
	}

	render() {
		const { todo } = this;

		return (
			<div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
				<input
					type="checkbox"
					className="todo-checkbox"
					checked={todo.isCompleted}
					onChange={this.handleChange.bind(this)}
				/>
				<form onSubmit={this.editTodo.bind(this)}>
					<input
						type="text"
						className="todo-value"
						value={this.state.value}
						onChange={ev =>
                            this.setState({ value: ev.target.value })
                        }
					/>
				</form>
			</div>
		);
	}
}

export default TodoItem;
