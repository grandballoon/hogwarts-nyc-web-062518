import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class HogCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      details: false,
      cardShow: true
    }
  }

  nameConverter = () => {
    return this.props.hogDetails.name.split(' ').join('_').toLowerCase()
  }

  show = () => {
    // this.setState({
    //   ...this.state,
    //   details: !this.state.details
    // }, console.log(this.state.details))
    // if (this.state.details === false) { // this.state.details is false and I want it now to be true
    //   this.setState({
    //     ...this.state,
    //     details: true
    //   }, console.log(this.state.details))
    // } else {  // this.state.details is true and I want it now to be false
    //   this.setState({
    //     ...this.state,
    //     details: false
    //   }, console.log(this.state.details))
    // }

      this.setState({
        ...this.state,
        details: !this.state.details
      }, console.log(this.state.details))

  }

  hogDetails = () => {
    return (
      <div>
        <Card.Description>Specialty: {this.props.hogDetails.specialty}</Card.Description>
        {this.props.hogDetails.greased===true ? <Card.Description>Greased!</Card.Description> : <Card.Description>Not greased</Card.Description>}
        <Card.Description>Weight: {this.props.hogDetails['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</Card.Description>
        <Card.Description>Highest Medal Acheived: {this.props.hogDetails['highest medal achieved']}</Card.Description>
      </div>
    )
  }

  wholeCard = () => {
    return (<div className="ui eight wide column" onClick={this.show}>
      {/* <p>Name: {this.props.hogDetails.name}</p> */}
      {/* <img src={require(`../hog-imgs/${this.nameConverter()}.jpg`)} alt={this.nameConverter()}></img> */}
      <Card>
        <Image src={require(`../hog-imgs/${this.nameConverter()}.jpg`)} />
        <Card.Header>{this.props.hogDetails.name}</Card.Header>
        { this.state.details === false ? null : this.hogDetails() }
      </Card>
    </div>)
  }

  changeCardStatus = () => {
    this.setState({
      ...this.state,
      cardShow: !this.state.cardShow
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeCardStatus}>Hide Card</button>
        {this.state.cardShow === true ? this.wholeCard() : null}
      </div>
    )
  }
}

export default HogCard
