import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import secondNasa from './images/secondNasa.png';
import seconddown from './images/seconddown.png';
import bottom from './images/bottom.png';
import blockchain from './images/blockchain.png';
import gsap, { Power3 } from 'gsap';
import { useIntersection } from 'react-use';

const Second = () => {

  // let veme = useRef(null);
  // let reality = useRef(null);
  const [display, setDisplay] = useState(false);
  
  
  useEffect(()=>{
     if(window.innerWidth <= 1000) setDisplay(true);
     else setDisplay(false);
  },[window.innerWidth])

 
    


  let secpic = useRef(null);
  let firsthalf = useRef(null);


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
      <div  className='bg-blue-900 h-screen relative '>
      {!display &&  <div className='curvedd bg-blue-900'> 
      <p className='text-white p-2'>Developing ERP solution for </p>
      <h1 className='text-white font-bold text-3xl p-2'>BlockChain</h1>
      <p className='text-white p-2'>in furniture industry</p>
        </div>}

        {display && <img src={blockchain} alt='fuckit' className='relative w-screen' />}

        <div    className='flex flex-col top-96 absolute left-5 text-white opacity-0 isIn'>
          <img 
           src={bottom} alt='bottom' className='w-64 pb-3 '/>
          <h3 className='text-3xl font-bold pb-2'>ABC 23478</h3>
          <p>We are the best</p>
          <p>Web development company</p>
          <p>in the world</p>
        </div>
        <div  className='flex flex-row btns text-slate-200 opacity-0 isIn'>
          <p className='p-2 mr-56 text-gray-400'>Coming soon</p>
          <p className='ml-20'>SKIP</p>
        </div>
      </div>

      <div ref={secpic} className='bg-blue-800 h-screen flex flex-row relative'>
        {/* h-full w-96 */}
        <img 
        src={secondNasa} alt='straight' className=' absolute left-20 bottom-3 top-25 opacity-0 secondNasa fadeIn'/>
        <img 
        src={seconddown} alt='down' className='h-96 w-80 absolute right-10 top-0 opacity-0 fadeIn'/>
      </div>
    </div>

    </>
  )
}

export default Second;