import React, { Component } from 'react';
import TaskWindow from './TaskWindow';
import './css/EndedTasks.css';

class EndedTasks extends Component {
    state = {
        taskWindowStatus: false,
    }

    buttonConent = {
        opened: 'Ok, it is enough for me!',
        closed: 'I want to see my results!'
    }

    handleClick = () => {
        this.setState(prevState => ({
            taskWindowStatus: !prevState.taskWindowStatus,
        }))
    }


    render() {
        const { opened, closed } = this.buttonConent;
        return (
            <section className="ended-tasks">
                <button className='text-button show-task-window' onClick={this.handleClick} >{this.state.taskWindowStatus ? opened : closed}</button>
                { this.state.taskWindowStatus && < TaskWindow deleteTask={this.props.deleteTask} finishedTask={this.props.finishedTask} tasks={this.props.tasks} option='completed' />}
            </section>
        );
    }
}

export default EndedTasks;