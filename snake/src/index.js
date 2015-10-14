import React from 'react'
import { App } from 'App'

window.jQuery = window.$ = require("jquery")

if (typeof document !== 'undefined'){
  React.render(<App />, document.body)
}