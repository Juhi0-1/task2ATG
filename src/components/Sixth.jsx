import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import sixthfirst from './images/sixthfirst.png';
import sixthsecond from './images/sixthsecond.png';
import bottom from './images/bottom.png';
import gsap, { Power3 } from 'gsap';
import { useIntersection } from 'react-use';
import eastasia from './images/eastasia.png';
const Sixth = () => {
  let secpic = useRef(null);
  let firsthalf = useRef(null);

  const [display, setDisplay] = useState(false);
  
  
  useEffect(()=>{
     if(window.innerWidth <= 1000) setDisplay(true);
     else setDisplay(false);
  },[window.innerWidth])


  const inter = useIntersection(firsthalf,{
    root:null,
    rootMargin:"0px",
    threshold:0.9
  })

  const isIn = (element)=>{
    gsap.to(element, 1,{
      opacity:1,
      x:15,
      ease: 'power4.out',
      stagger:{
        amount: .3
      }
    })
  }
  const isOut = (element)=>{
    gsap.to(element, 1, {
      opacity:0,
      x:10,
      ease: 'power4.out',
      
    })
  }
 
  const intersection = useIntersection(secpic, {
    root:null,
    rootMargin:'0px',
    threshold: 0.9
  })

  const fadeIn = (element)=>{
    gsap.to(element, 1, {
      opacity:1,
      y: -60,
      ease: 'power4.out',
      stagger:{
        amount: .3
      }
    })
  } 
  const fadeOut = (element)=>{
    gsap.to(element, 1, {
      opacity:0,
      y:-20,
      ease: 'power4.out',
      
    })
  }
  
  intersection&& intersection.intersectionRatio < .9 ?
  fadeOut(".fadeIn")  : fadeIn(".fadeIn")

  inter&& inter.intersectionRatio < .9 ?
  isOut(".isIn")  : isIn(".isIn")

  return (
    <>
    
     <div ref={firsthalf} className='main'>
      <div  className='bg-green-800 h-screen relative '>
        { !display &&  <div className='curvedd bg-green-800'> 
        <p className='text-white p-2'>Biggest Classified </p>
        <h1 className='text-white font-bold text-6xl p-2'>East Asia </h1>
        <p className='text-white p-2'>Countries</p>
         </div>}

{display && <img src={eastasia} alt='abs' className='w-screen relative'/>}

        <div    className='flex flex-col top-96 absolute left-5 text-white opacity-0 isIn'>
         <img 
           src={bottom} alt='bottom' className='w-64 pb-3 '/>
          <h3 className='text-3xl font-bold pb-2'>ABC 123</h3>
          <p>We are the best</p>
          <p>Web development company</p>
          <p>in the world</p>
        </div>
        <div  className='flex flex-row btns text-slate-200 opacity-0 isIn'>
          <p className='p-2 mr-56 text-gray-400'>Coming soon</p>
          <p className='ml-20'>SKIP</p>
        </div>
      </div>

      <div ref={secpic} className='bg-green-600 h-screen flex flex-row relative'>
        {/* h-full w-96 */}
        <img 
        src={sixthfirst} alt='straight' className=' absolute left-32 top-48 opacity-0 secondNasa fadeIn'/>
        <img 
        src={sixthsecond} alt='down' className='h-96 w-96 absolute  top-36 right-28 bottom-10 opacity-0 fadeIn secondNasa'/>
      </div>
    </div>

    </>
  )
}

export default Sixth