import React, { Component } from 'react';
import './css/NewTaskForm.css';
class NewTaskForm extends Component {
    state = {
        inputValue: '',
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const content = this.state.inputValue;
        const task = {
            content: 'zrobic obiad',
        };

        this.props.setLocalStorage(task, 'active');
        this.setState({ inputValue: '', });
    }

    render() {
        return (
            <form action="text" onSubmit={this.handleSubmit}>
                <label htmlFor="task">Wprowadź: </label>
                <input type="text" name='task' onChange={this.handleInputChange} value={this.state.inputValue} />
                <button>Dodaj</button>
            </form>);
    }
}

export default NewTaskForm;