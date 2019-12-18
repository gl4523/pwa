import React from 'react'

export interface CardComponentProp {
  id: string
  title: string
  resume: string
  type: 'image' | 'text' | 'hybrid'
}
function Card(props: CardComponentProp) {
  return (
    <div></div>
  )
}

export default Card as React.FunctionComponent<CardComponentProp>