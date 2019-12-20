import React from 'react'
import img from 'assets/images/paper.jpg'
import Card from './components/Card'
import CardGroup from './components/CardGroup'
function Home() {
  return (
    <div>
      <CardGroup>
        <Card id='asd' img={img} type='hybrid' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
        <Card id='asd' img={img} type='text' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
        <Card id='asd' img={img} type='image' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
        <Card id='asd' img={img} type='text' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
        <Card id='asd' img={img} type='hybrid' title='Name of the work 1' resume='Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. ' />
      </CardGroup>
    </div>
  )
}

export default Home
export const LinkName = '首页'