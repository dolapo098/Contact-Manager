import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm
            navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">Contact Manager</a>
                    <ul className="navbar-nav mr-autp">
                        <li className="nav-item">
                            <a href="/add" className="nav-link">Add Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
