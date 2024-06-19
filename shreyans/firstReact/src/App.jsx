import React, {useState} from 'react'

function App() {
  var [a,b] = useState(69)
  return (
    <div>{a}</div>
  )
}

export default App