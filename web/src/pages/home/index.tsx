import React from 'react'
import img from 'assets/images/paper.jpg'
function Home() {
  return (
    <div>
      <img style={{width: '100px', height: 'auto'}} src={img}></img>
    </div>
  )
}

export default Home
export const LinkName = '首页'