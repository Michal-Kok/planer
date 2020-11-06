import React, { Component } from 'react';
import './css/NewTaskForm.css';
import { ReactComponent as AddedTaskSVG } from './AddedTaskSVG.svg';
import gsap from 'gsap';

class NewTaskForm extends Component {
    state = {
        inputValue: '',
        emptySubmit: false,
        isSubmitSuccefull: false,
        isConfirmationApearing: false,
    }

    showConfirmation() {
        const { emptySubmit, isConfirmationApearing } = this.state;
        if (!emptySubmit && isConfirmationApearing) {
            gsap.from(".background-circle", { opacity: 0, duration: 0.3 });
            gsap.from(".tick", { y: -130, ease: "bounce.out", duration: 0.8, delay: 0.3 });
            gsap.from(".submit-confirmation-text", { x: -70, ease: "elastic.out(1, 0.75)", opacity: 0, duration: 0.6, delay: 0.8 });
        }
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
            isConfirmationApearing: false,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const content = this.state.inputValue;
        // if there nothing inside input...
        if (content === '') {
            this.setState({
                emptySubmit: true,
                isConfirmationApearing: false,
            });
            return;
        }

        const task = {
            content: content,
        };
        this.props.setLocalStorage(task, 'active');
        this.setState({
            inputValue: '',
            emptySubmit: false,
            isSubmitSuccefull: true,
            isConfirmationApearing: true,
        });
    }

    componentDidUpdate() {
        this.showConfirmation();
    }

    componentWillUnmount() {
        this.setState({
            isSubmitSuccefull: false,
            isConfirmationDisplayed: false,
        });
    }

    render() {
        return (
            <section className='newTaskForm-container'>
                <form action="text" onSubmit={this.handleSubmit} className='newTaskForm'>
                    <label htmlFor="task">Wprowadź zadanie:</label><br />
                    <div className='input-container'>
                        <input className="newTaskForm-input" type="text" name='task' onChange={this.handleInputChange} value={this.state.inputValue} />
                        {this.state.emptySubmit && <span className='submitError-span'>You can't add empty task!</span>}
                    </div>
                    <button className="newTaskForm-button">Dodaj</button>
                </form>
                { this.state.isSubmitSuccefull && <div className='submit-SVGContainer'><AddedTaskSVG /><h1 className='submit-confirmation-text'>ADDED!</h1></div>}
            </section>
        );
    }
}

export default NewTaskForm;