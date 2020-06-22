/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import Part1 from './part1'
import { Button } from '@material-ui/core'

class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      loading: true,
      data: []
    }
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        data: [
          { id: 1, name: "fjkf" },
          { id: 1, name: "jfkf" },
          { id: 1, name: "hj" },
          { id: 1, name: "ty" },

        ]
      })
    }, 5000)
  }

  componentDidUpdate() {

    console.log(this.state.error);
  }

  onClickBtn() {
    this.setState({
      error: true
    })

  }


  render() {
    if (this.state.loading) {
      return (<div>loading</div>)
    }
    return (
      <div>
        <Part1 title="login" type={0} onClick={() => {
          this.setState({
            error: false
          })
        }} />
        <Part1 title="signup" bg="green" />
        {this.state.error ? (
          <span>errro</span>
        ) : (
            null
          )}
        <Button onClick={this.onClickBtn} >ok</Button>
        {this.state.data.map((item) => {
          return <p>{item.name}</p>
        })}
      </div >
    )
  }

}
export default MainScreen