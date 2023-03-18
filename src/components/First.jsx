import React, { useEffect, useRef, useState } from 'react'
import './style.css';
import bottom from './images/bottom.png';
import firstpphone from './images/firstpphone.png'
import firstpsecphone from './images/firstpsecphone.png';
// import { TweenMax } from 'gsap/gsap-core';
import gsap, { Power3 } from 'gsap';
import remix from './images/remix.png';
import { useIntersection } from 'react-use';


const First = () => {

  let veme = useRef(null);
  let reality = useRef(null);
  let text = useRef(null);
  let foot = useRef(null);
  
  // const [display, setDisplay] = useState(false);

  
  
  // useEffect(()=>{
  //    if(window.innerWidth <= 1000) setDisplay(true);
  //    else setDisplay(false);
  // },[window.innerWidth])


  useEffect(()=>{
    // console.log(veme);
    gsap.to(
      veme,
      .9,
      {
        opacity:1,
        y:9,
        ease: Power3.easeOut
      }
    )
    gsap.to(
      reality,
      0.9,
      {
        opacity:1,
        y: 5,
        ease:Power3.easeIn
      }

    )
    gsap.to(
      text,
      0.9,
      {
        opacity:1,
        x : 5,
        ease:Power3.easeIn
      }

    )
    gsap.to(
     foot,
     0.9,
     {
      opacity:1,
      x:5,
      ease:Power3.easeOut
     }
    )
  },[])

  const [display, setDisplay] = useState(false);
  
  
  useEffect(()=>{
     if(window.innerWidth <= 1000) setDisplay(true);
     else setDisplay(false);
  },[window.innerWidth])


  
  return (
    <>
    
    <div  className='main'>
      <div  className='bg-purple-700 h-screen relative '>
        {  !display && <div className='curvedd bg-purple-700'> 
        <p className='text-white p-2'>Developing ERP solution for </p>
        <h1 className='text-white font-bold text-3xl p-2'>Text Heading</h1>
        <p className='text-white p-2'>in furniture industry</p>
       
         </div>
}
         

         {display && <img src={remix} alt='abc' className='relative w-screen'/>}

        <div  ref={el=>(text=el)}
          className='flex flex-col top-96 absolute left-5 text-white opacity-0 '>
        <img 
           src={bottom} alt='bottom' className='w-64 pb-3 '/>
          <h3 className='text-3xl font-bold pb-2'>ABC 23478</h3>
          <p>We are the best</p>
          <p>Web development company</p>
          <p>in the world</p>
        </div>
        <div ref={el=>{foot=el}}
         className='flex flex-row btns text-slate-200 opacity-0 '>
          <p className='p-2 mr-56 text-gray-400'>Coming soon</p>
          <p className='ml-20'>SKIP</p>
        </div>
      </div>

      <div   className='bg-purple-500 h-screen flex flex-row relative'>
        
        <img  ref={el=>(veme = el)}
        src={firstpphone} alt='straight' className='h-96 w-96  absolute left-9 bottom-0 opacity-0 '/>
        <img   ref={el=>(reality = el)}
        src={firstpsecphone} alt='down' className='h-96 w-80 absolute right-10 top-0 opacity-0 '/>
      </div>
    </div>

    </>
  )
}

export default First