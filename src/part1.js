import React, { Component } from 'react'

import './part1.css'

export default class part1 extends Component {




    render() {
        return (
            <span onClick={this.props.onClick} style={{
                backgroundColor: this.props.type === 1 ? "green" : "#f00", cursor: 'pointer', padding: 15,
                margin: 15, borderRadius: 5
            }}  >
                {this.props.title}
            </span>
        )
    }
}
