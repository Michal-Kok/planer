import React from 'react';
const ListOfTasks = (props) => {

    const { completed, failed, active } = props.tasks[0];
    let tasks = [];
    console.log(active);
    let updateTask = props.updateTask;
    switch (props.option) {
        case 'active':
            tasks = active.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={() => updateTask(index)}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);
        case 'completed':
            tasks = completed.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={() => updateTask(index)}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);

        case 'failed':
            tasks = failed.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={(index) => updateTask()}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);

        case 'all':
            const allTasks = completed.concat(failed);
            tasks = allTasks.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={() => this.updateTask()}>Delete</span></li>
                );
            })
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);
        default:
            const err = new Error('Problem with showing tasks');
            console.error(err);
    }
}
// return (<nav className='tasks'><ul>{this.showTasks()}</ul></nav>);


export default ListOfTasks;