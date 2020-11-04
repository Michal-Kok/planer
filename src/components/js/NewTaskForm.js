import React, { Component } from 'react';
import './css/NewTaskForm.css';
class NewTaskForm extends Component {
    state = {
        inputValue: '',
        emptySubmit: false,
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const content = this.state.inputValue;
        // if there nothing inside input...
        if (content === '') {
            this.setState({ emptySubmit: true, });
            return;
        }

        const task = {
            content: content,
        };
        this.props.setLocalStorage(task, 'active');
        this.setState({
            inputValue: '',
            emptySubmit: false,
        });
    }

    render() {
        return (
            <form action="text" onSubmit={this.handleSubmit} className='newTaskForm'>
                <label htmlFor="task">Wprowadź zadanie:</label><br />
                <div className='input-container'>
                    <input className="newTaskForm-input" type="text" name='task' onChange={this.handleInputChange} value={this.state.inputValue} />
                    {this.state.emptySubmit && <span className='submitError-span'>You can't add empty task!</span>}
                </div>
                <button className="newTaskForm-button">Dodaj</button>
            </form>);
    }
}

export default NewTaskForm;