import React, { Component } from 'react';
import './AddTodo.scss';
import { inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
class AddTodo extends Component {
	state = {
		value: ''
    };


	editTodo(ev) {
        ev.preventDefault();
        if (!this.state.value.trim().length) return;
		const { store } = this.props;
        store.editTodo({ ...this.state });

        // RESET INPUT
        this.setState({value: ''});
	}

	render() {
		return (
			<section className="add-todo">
				<form onSubmit={this.editTodo.bind(this)}>
					<input
						type="text"
						placeholder="Write here new todo..."
						onChange={ev =>
							this.setState({ value: ev.target.value })
                        }
                        value={this.state.value}
					/>
				</form>
			</section>
		);
	}
}

export default AddTodo;
