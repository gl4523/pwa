import ReactDOM from 'react-dom'
import React from 'react'
import 'assets/icons/iconfont.css'
import './global.scss'

ReactDOM.render(<div>
  <h2>hello pwa</h2>
</div>, document.querySelector('#root'))

if (module) {
  (module as any).hot.accept()
}

if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('https://gl4523.github.io/pwa/js/sw.js').then(registration => {
      console.log(registration )
      return registration 
    }).catch(e => {
      console.log(e)
    })
}