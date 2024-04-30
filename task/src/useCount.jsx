import React from 'react'
import { useState } from 'react'

function useCount() {
    const [count, setcount] = useState(0)


    function art() {
        setcount(count+1)
        
    }
    function azalt() {
        setcount(count-1)
        
    }

    return [count,art,azalt]
}

export default useCount