import React from 'react'

export default function Car(props){
  return (
    <div>
        <div>Car name: {props.name}</div>
        <div>Year: {props.year}</div>
    </div>
  )
}

