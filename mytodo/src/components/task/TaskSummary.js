import React from 'react';

const TaskSummary = ({ task }) => {
    return(
        <div className='card z-depth-0'>
            <div className='card-content'>
                <span className='card-title'>{task.title}</span>
                <div className='card-action grey lighten-4'>
                    <p>Created At</p>
                    <p>Due Date</p>
                </div>
            </div>
        </div>
    )
}

export default TaskSummary