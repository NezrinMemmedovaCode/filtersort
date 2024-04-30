import React, { useState } from 'react'
import useCount from './useCount'

function Task1() {
const [count,art,azalt]=useCount()


  return (
    <div>
        <h1>Hook</h1>
        <h2>{count}</h2>
        <button onClick={azalt}>-</button>
        <button onClick={art}>+</button>

    </div>
  )
}

export default Task1