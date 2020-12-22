const initState = {
    tasks: [
        
    ]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            console.log('task added', action.task);
            return state;
        case 'CREATING_TASK_ERR':
            console.log('creating task err', action.err);
            return state;
        default:
            return state;
    }
}

export default taskReducer