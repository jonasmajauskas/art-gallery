import React from 'react'

function Gallery(props) {
  return (
    <div style={{'width': '20%'}}>
        <img src={props.objectImg} alt={props.title} />
        <p>{props.artist}</p>
    </div>
  )
}

export default Gallery