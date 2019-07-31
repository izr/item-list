import React from 'react'
import logo from './logo.svg'
import data from './data'
import ItemsList from './components/ItemsList'


function App() {
  return (
    <div>
      <ItemsList initialItems={data.data} />
    </div>
  )
}

export default App
