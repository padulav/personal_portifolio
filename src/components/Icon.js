import React from 'react'

export default class Icon extends React.Component{
    render(){
        return(
            <div className='navButton'>
                {this.props.name}
            </div>
        )}
}