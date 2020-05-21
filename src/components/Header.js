import React, { Component } from 'react'
import Navigation from './Navigation'
export default class Header extends Component {
    render() {
        return (
            <header className="p-3 border-b flex justify-between items-center">
                <span className="text-3xl font-bold ">
                React App
                </span>
                <Navigation />
            </header>
        )
    }
}
