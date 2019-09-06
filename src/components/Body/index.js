import React, { Component } from 'react'
import {connect} from 'react-redux'
import store from '../../store'

class Datelist extends Component {

    checkData = () => {
       return '5555'
    }

    render() {
        console.log('state',this.props.addData)
        console.log(store.getState())
        return (
            <div>
                DateList
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    addData: state.adddata
})
    

export default connect(mapStateToProps)(Datelist)
