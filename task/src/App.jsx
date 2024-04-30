import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task1 from './Task1'


function App() {

  const [category, setcategory] = useState([])
  const [search, setsearch] = useState("")



  useEffect(() => {
   

    fetch("https://northwind.vercel.app/api/categories")
    .then(res=>res.json())
    .then(data=>setcategory(data))
 
  }, []);
  function sortaz(params) {
    category.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))
    
  }
  function sortza(params) {
    category.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0))
    
  }
  
  return (
    <>
    <button onClick={()=>sortaz("name")}>A-Z</button>
    <button onClick={()=>sortza("name")}>Z-A</button>
    <br />
  <input  placeholder='search' type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
<Task1></Task1>
    {category
   
    .filter(x=>x.name.toLowerCase().includes(search.toLocaleLowerCase()))
    .map((x)=> <div className='cards'>
      <h1>{x.name}</h1>
      <p>{x.description}</p>
    </div> )}
    


      </>
  )
}

export default App
