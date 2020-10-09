import React from 'react';
const ListOfTasks = (props) => {

    const { completed, failed, active } = props.tasks[0];
    let tasks = [];
    const deleteTask = props.deleteTask;
    const finishedTask = props.finishedTask;
    switch (props.option) {
        case 'active':
            tasks = active.map((task, index) => {
                return (
                    <li key={index}>{task.content} <span onClick={() => finishedTask(index, active, 'success')}>Done</span> <span onClick={() => finishedTask(index, active, 'failour')}>Missed</span> <span onClick={() => deleteTask(index, active, 'active')}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);
        case 'completed':
            tasks = completed.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={() => deleteTask(index, completed, 'completed')}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);

        case 'failed':
            tasks = failed.map((task, index) => {
                return (
                    <li key={index}>{task.content}<span onClick={() => deleteTask(index, failed, 'failed')}>Delete</span></li>
                );
            });
            return (<nav className='tasks'><ul>{tasks}</ul></nav>);

        case 'all':
            const allTasks = completed.concat(failed);
            tasks = allTasks.map((task, index) => {
                return (
                    <li key={index}>{task.content}</li>
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