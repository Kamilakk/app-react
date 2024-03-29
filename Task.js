import React from 'react';

const Task = (props) => {

    const style = {
        color: '#CC0099',
    }

    const { text, date, id, active, important, finishDate } = props.task;

    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                    <button onClick={() => props.change(id)}
                    >Zrobione</button>
                    <button onClick={() => props.delete(id)}
                    >X</button>
                </p>

            </div >
        );
    } else {

        const finish = new Date(finishDate).toLocaleString()
        return (
            <div>
                <p>
                    <strong>{text}</strong><em> (wykonać do {date})
                    </em><br />
                    - potwierdzono wykonanie dnia<span> {finish}</span>

                    <button onClick={() => props.delete(id)}
                    >X</button>
                </p>

            </div>
        )
    }
}

export default Task;