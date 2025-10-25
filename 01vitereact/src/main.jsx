import React from 'react'
import { createRoot } from 'react-dom/client'

function MyApp() {
  return(
    <div>
      <h1>Chai Walla OP!!</h1>
    </div>
  )
}
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com',
    target: '_blank'
  },
  'Visit Google'
)
createRoot(document.getElementById('root')).render(
  reactElement
)