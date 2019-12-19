import React from 'react'
import img from 'assets/images/paper.jpg'
import Card from './components/Card'
function Home() {
  return (
    <div>
      <div style={{ width: '100px' }}>
        <img style={{ width: '100%', height: 'auto' }} src={img}></img>
      </div>
      <Card id='asd' img={img} type='image' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
    </div>
  )
}

export default Home
export const LinkName = '首页'