import React from 'react'
import InputBox from '../Components/InputBox'
import { delay, motion } from 'framer-motion'

const Login = () => {
  return (
    <div className=' h-[100vh] w-full login flex justify-baseline items-center flex-wrap '>
        <div className='hidden lg:left-side lg:h-full w-150 bg-[#1f1f1f] lg:flex lg:justify-center lg:items-start'>
            <img src='https://images.unsplash.com/photo-1760931969401-9bd6ee902798?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-full w-full shadow-lg'/>
        </div>
        <div className='h-full w-full lg:w-1/2 flex flex-col justify-center items-center'>
            <motion.h1 initial={{x:-300}} animate={{x:0}} transition={{duration:0.3}} className='text-6xl lg:text-7xl text-blue-400 fun-font p-3  uppercase font-extrabold'> Predictor </motion.h1>
            <motion.p initial={{y:200,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4}} className='text-2xl capitalize text-blue-300 p-3 pop-font'> welcome to Predictor </motion.p>
            <motion.p initial={{y:200,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.4}} className='text-lg capitalize text-blue-300s pop-font text-white'> Sign in now! </motion.p>
            <form className='flex flex-col justify-center items-center'>
              <InputBox p_holder="Enter Username"/>
              <InputBox p_holder="Enter Password" type="Password"/>  
              <motion.button initial={{y:200,opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.6}}  className='pop-font h-13 w-70 p-3 text-white font-boldmt-8 text-lg rounded-3xl bg-gray-500 mt-10 hover:bg-white hover:text-black hover:cursor-pointer'> Sign In </motion.button>
            </form>
        </div>
       
    </div>
  )
}

export default Login