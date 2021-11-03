import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
} from '../actions/todos';

import List from './List';

class Todos extends Component {
    addItem = (e) => {
        e.preventDefault();
        this.props.dispatch(
            handleAddTodo(this.input.value, () => (this.input.value = ''))
        );
    };

    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id));
    };

    removeItem = (todo) => {
        this.props.dispatch(handleDeleteTodo(todo));
    };
    render() {
        return (
            <div>
                <h1>Todo List </h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => (this.input = input)}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        );
    }
}

export default connect((state) => ({
    todos: state.todos,
}))(Todos);
