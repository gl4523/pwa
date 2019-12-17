import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './global.scss'

ReactDOM.render(<App/>, document.querySelector('#root'))

if (module) {
  (module as any).hot.accept()
}