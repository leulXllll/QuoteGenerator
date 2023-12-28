import { useState , useEffect } from 'react'
import axios from 'axios'

function App() {
const [visible,setVisible]=useState(false)
const [advice ,setAdvice]=useState('')
const [text,setText]=useState('')

function fetchApi(){

  axios.get('https://api.adviceslip.com/advice').then(res=>
  setAdvice(res.data.slip.advice)).catch(err=>console.log(err))
  setVisible(true)
  

}
useEffect(()=>{

const original = "Quote Generator"
let currentIndex=0;
const interval = setInterval(() => {
  setText(original.substring(0,currentIndex+1))
  currentIndex++

},100)

return ()=>clearInterval(interval)
},[])

  return (
    <>
    <div className='bg-black '>
      <div className='bg-hero h-screen grid place-items-center'>
        <div>
           <h1 className='text-white text-3xl bg-blue-400 p-4 rounded-md font-semibold mb-[-180px] md:text-5xl'>{text}</h1>
           </div>

            <div className=' w-5/6 h-10 rounded bg-blue-200 flex items-center justify-center p-14 mb-[-90px] md:w-6/12 md:p-12 md:rounded-md '>
                 <p className={` ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>{advice}</p>
            </div>
           
       
       <div>
       <button  onClick={()=>{fetchApi() ;}} 
        className='rounded p-4 bg-blue-400 font-bold m-auto  md:p-7 md:text-2xl '>Click for Quote
       </button>
       </div>
  </div>
   </div>

     
    </>
  )
}

export default App
  {/* <button className='text-2xl rounded-full bg-gray-500 text-white p-4 md:text-xl lg:p-6' 
      onClick={()=>fetchApi()}>Get</button> */}