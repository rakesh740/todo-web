import React, {Component} from 'react';
import { addTask } from '../../store/action/taskAction'
import { connect } from 'react-redux'

class AddTask extends Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
    }


    render() {
        return(
            <div className='AddTask section container'>
                <form onSubmit={this.handleSubmit}>
                    <h5 className='green-text darken-2'>Add New Task:</h5>
                    <input id='title' className='materialize-textarea' onChange={this.handleChange}></input>
                    <button className='btn-small red darken-1'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTask: (task) => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)