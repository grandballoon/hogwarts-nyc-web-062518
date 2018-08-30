import React, { Component } from 'react'
import hogs from '../porkers_data';
import HogCard from './Card.js'

function CardContainer(props) {

  // const displayGreasedHogs = hogs.map((hog, index) => {
  //   if (props.greaseStatus === true) {
  //     if (hog.greased === true) {
  //       return hog
  //     }
  //   } else if (props.greaseStatus === false) {
  //     return hog
  //   }
  // })

  const displayGreasedHogs = () => {
    if (props.greaseStatus === true) {
      return hogs.filter(hog => hog.greased === true)
    }
    else {
      return hogs
    }
  }

// console.log(displayGreasedHogs)
  // const displayNameHogs = displayGreasedHogs.map(hog => console.log(hog))
  // console.log("---------------")

  const displayNameHogs = displayGreasedHogs().filter(hog => hog.name.toLowerCase().includes(props.searchTermName.toLowerCase()) && hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > props.searchTermWeight).map((hog, index) => <HogCard key={index} hogDetails={hog}/>)

  return (
    <div className="ui grid container">
      {displayNameHogs}
    </div>
  )
}

export default CardContainer
