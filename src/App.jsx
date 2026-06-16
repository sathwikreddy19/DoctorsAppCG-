import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import {useEffect} from 'react'
function App() {
//  let [count,setCount]=useState(0)
//  useEffect(()=>{
//   console.log('running ')
//   console.log('api call')
//  },[count])
  return (
   <div>
    {/* {count}
    <button onClick={()=>setCount(count+1)}>inc</button> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/add-doctor' element={ <Addnewdoctor/>}/>
    </Routes>
    


    <div className="doctorparent">
    <Doctorcard name='Shreyan Reddy' specialization='Cardiology' gender='Male'/> 
    <Doctorcard name='Laxmi' specialization='Opthamology' gender='Female'/> 
    <Doctorcard name='Nandana' specialization='Neurology' gender='Female'/> 
    <Doctorcard name='Sai Reddy' specialization='Oncology' gender='Male'/> 
    <Doctorcard name='Adhitri Reddy' specialization='Ortho' gender='Female'/> 
    <Doctorcard name="Koteshwar Rao" specialization="pulmonary" gender="Male"/>
  
    </div> 

    {/* <Addnewdoctor/> */}
   


   </div>
  )
}

export default App