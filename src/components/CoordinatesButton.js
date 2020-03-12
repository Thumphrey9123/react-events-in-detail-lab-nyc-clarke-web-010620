import React from 'react';


export default class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.screenX, event.screenY])
    }

    render () {
        console.log(this.props)
        return(
            <button onClick={this.handleClick}></button>
        )
    }
} 

