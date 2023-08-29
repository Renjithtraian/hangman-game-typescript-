import React from 'react'

const HEAD = (
  <div className='App-dynamicHead'/>
)
const BODY = (
  <div className='App-dynamicBody'/>
)
const RIGHT_ARM = (
  <div className='App-drawingRightArm'/>
)
const LEFT_ARM = (
  <div className='App-drawingLeftArm'/>
)
const RIGHT_LEG = (
  <div className='App-drawingRightLeg'/>
)
const LEFT_LEG = (
  <div className='App-drawingLeftLeg'/>
)

const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]

type hangmanProp = {
  numberOfGuesses : number
}

const HangmanDrawing = ({numberOfGuesses}:hangmanProp) => {
  console.log(numberOfGuesses,"number")
  return (
    <div className="App-drawing">
      { BODY_PARTS.slice(0,numberOfGuesses) }
      <div className='App-drawing-right'/>
      <div className='App-drawing-top'/>
      <div className='App-drawing-height'/>
      <div className='App-drawing-straight'/>
    </div>
  )
}

export default HangmanDrawing
