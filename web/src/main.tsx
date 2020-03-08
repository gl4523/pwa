import ReactDOM from 'react-dom'
import React from 'react'
import 'assets/icons/iconfont.css'
import './global.scss'
import humanPic from '../assets/images/human.png'

ReactDOM.render(<div>
  <h2>hello pwa</h2>
  <img src='humanPic'></img>
</div>, document.querySelector('#root'))

if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('https://gl4523.github.io/pwa/js/sw.js').then(registration => {
    console.log(registration)
    registration.showNotification('hello world')
    return registration
  }).catch(e => {
    console.log(e)
  })
}