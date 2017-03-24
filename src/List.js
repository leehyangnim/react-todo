import React from 'react'

function List(props) {
    const lists = props.lists.map( (list, index) => {
      let crossout
      if (list.done) {
        crossout = "line-through"
      } else {
        crossout = null
      }
      return (
        <li key={index} onClick={ () => props.onClick(index)} style={{textDecoration: crossout }} > {list.task} </li>
      )
    })
    return (
      <ol>{lists}</ol>
    )
}

export default List
