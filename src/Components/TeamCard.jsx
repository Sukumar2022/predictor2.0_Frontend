import { motion } from 'framer-motion'
import React from 'react'
import { Link, Links } from 'react-router-dom'
const TeamCard = ({m_img,m_name,m_role,m_mail,m_facebook,m_linkdin,m_git}) => {
  return (
    <motion.div initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true, amount: 0.5 }} className='pop-font p-3 mt-1 w-80 flex flex-col justify-center items-center rounded-2xl teamCard ease-in duration-150'>
        <img src={m_img} className='h-60 w-60 rounded-3xl'/>
        <div>
            <h2 className='text-white text-2xl text-center mt-7 p-1'> {m_name} </h2>
            <p className='text-gray-400 text-sm w-80 text-center m-2'>{m_role}</p>
            <div className='flex gap-4 justify-center items-center text-2xl text-gray-200 ' > 
            <Link to={m_mail}> <i class="ri-mail-fill hover:text-red-500 cursor-pointer"></i> </Link>
            <Link to={m_facebook}><i class="ri-facebook-box-fill hover:text-red-500 cursor-pointer"></i></Link>
            <Link to={m_linkdin}> <i class="ri-linkedin-box-fill hover:text-red-500 cursor-pointer"></i> </Link>
            <Link to={m_git}><i class="ri-github-fill hover:text-red-500 cursor-pointer"></i></Link>
             </div>
        </div>
    </motion.div>
  )
}

export default TeamCard