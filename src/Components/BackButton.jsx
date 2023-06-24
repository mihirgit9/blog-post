import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className='w-fit'>
      <button onClick={()=>navigate(-1)} 
        className='border-[1px] border-slate-400 bg-slate-50 px-4 py-1 rounded-md absolute left-[-9.7rem]'
        >Back
      </button>
    </div>
    // The parent container should be positioned relative so as to use this button efficiently
  )
}

export default BackButton