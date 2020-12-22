export const addTask = (task) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //async call
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
            createdOn: new Date()
        }).then(() => {
            dispatch({type: 'ADD_TASK', task: task})
        }).catch((err) => {
            dispatch({type: 'CREATING_TASK_ERR', err: err})
        })
    }
}