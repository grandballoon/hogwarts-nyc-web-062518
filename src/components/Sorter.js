import React from 'react'
import NumericInput from 'react-numeric-input';

const Sorter = (props) => {
  return (
    <div>
      Name:<input type="text" onChange={props.handleNameSearch}/><br />
      Weight:<input type="number" step={0.1} min={0.0} max={5.1} onChange={props.handleWeightSearch}/><br />
      Greased:<input type="checkbox" onChange={props.handleGreaseSearch}/><br /><br />
    </div>
  )

}

export default Sorter
