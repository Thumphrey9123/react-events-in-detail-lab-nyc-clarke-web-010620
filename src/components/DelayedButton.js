// Code DelayedButton Component Here
import React from 'react';


export default class DelayedButton extends React.Component {
    handleClick = (event) => {
        event.persist()
        this.props.onDelayedClick(event)
    }

    render () {
        console.log(this.props)
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}