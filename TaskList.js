import React from 'react';
//eslint-disable-next-line
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    //console.log(active, done);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    return (
        <>

            <div className='active'>
                <h1 style={{ fontFamily: 'Palatino Linotype' }}>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : <p style={{ fontSize: '40px', border: '2px solid red' }}>BRAK ZADAŃ !</p>}
            </div>

            <hr />

            <div className='done'>
                <h3 style={{ fontFamily: 'Palatino Linotype', textDecoration: 'underline' }}>Zadania zrobione <em>({done.length})</em></h3>
                {done.length > 7 && <span style={{ fontSize: 10 }}>Wyświetlonych jest tylko 7 ostanich zadań.</span>}
                {doneTasks.slice(0, 7)}
            </div>
        </>
    );
}

export default TaskList;