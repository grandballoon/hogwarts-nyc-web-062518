import React, { Component } from 'react'
import Sorter from './Sorter'
import CardContainer from './CardContainer'

export default class Container extends Component {
  constructor(props){
    super(props)
    this.state = {
      // hogData: hogs,
      searchTermName: "",
      searchTermWeight: 0,
      searchTermGrease: false
    }
  }

  handleNameSearch = (event) => {
    this.setState({searchTermName: event.target.value})
  }

  handleWeightSearch = (event) => {
    this.setState({searchTermWeight: event.target.value})
  }

  handleGreaseSearch = (event) => {
    this.setState({searchTermGrease: !this.state.searchTermGrease})
  }

  render(){
    return (
      <div>
        <Sorter handleNameSearch={this.handleNameSearch} handleWeightSearch={this.handleWeightSearch} handleGreaseSearch={this.handleGreaseSearch}/>
        <CardContainer greaseStatus={this.state.searchTermGrease} searchTermName={this.state.searchTermName} searchTermWeight={this.state.searchTermWeight}/>
      </div>
    )
  }
}
