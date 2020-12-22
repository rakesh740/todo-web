import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../store/action/authAction'

const SignedInLinks = (props) => {
    return(
        <ul className='right'>
            <li> <a onClick={props.signout}>Sign Out</a></li>
            <li><Link to='/' className='btn btn-floating green lighten-3 black-text'>NU</Link></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signout: () => dispatch(signout())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)