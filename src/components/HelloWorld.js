import React from 'react'

export default class HelloWorld extends React.Component{
    render(){
        return(
        <div className="text-center">
        <h1 className="text-3xl">Hello {this.props.name}</h1>
        </div>
        )
    }
}

