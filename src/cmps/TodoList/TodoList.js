import React , { Component } from 'react';
import './TodoList.scss';

import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';

@inject('store')
@observer
class TodoList extends Component {

    @observable
    todos = this.props.store.filteredTodos;

    render() {
        const {todos} = this;

        return (
            <section className="todo-list">
                {
                    todos.map(todo => {
                        return <TodoItem key={todo._id} todo={todo} />
                    })
                }
                <AddTodo />
                
            </section>
        );
    }
}

export default TodoList;