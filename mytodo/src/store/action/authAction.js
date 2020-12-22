export const signin = (credentials) => {
    return(dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
       ).then(() => {
           dispatch({type: 'LOGIN_SUCCESS'});
       }).catch((err) => {
           dispatch({type: 'ERR_LOGIN', err});
       });
    }
}


export const signout = () => {
    return(dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'LOGOUT_SUCCESS'});
        });
    }
}


export const signup = (newuser) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newuser.email,
            newuser.password
        ).then((resp) => {
            return firestore.collection( 'users' ).doc(resp.user.uid).set({
                firstname: newuser.firstname,
                lastname: newuser.lastname,
                initials: newuser.firstname[0] + newuser.lastname[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch({type: 'ERR_SIGNUP', err })
        })
    }
}