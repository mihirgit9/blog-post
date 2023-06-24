import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const post = props.post;
    const navigate = useNavigate();

  return (
    <div className='border-[1px] border-black p-4 px-12 rounded-xl bg-green-50 hover:shadow-lg'>
    
        <h1 className='w-fit text-xl font-bold cursor-pointer hover:underline' 
          onClick={()=>navigate(`/blogs/${post.id}`)} 
        >{post.title}</h1>

        <p className='text-sm text-slate-600 pl-4 mt-1'>By  
          <span className='italic'> {post.author}</span> On     
          <span className=' font-bold cursor-pointer hover:underline' 
            onClick={()=>{navigate(`/categories/${post.category.replaceAll(" ", "-")}`)}}
            > {post.category}
          </span>
        </p>

        <p className='text-sm text-slate-600 pl-4 mb-1'>Posted On {post.date}</p>

        <div className='my-4 font-medium'>{post.content}</div>

        <div className='flex gap-2 flex-wrap text-blue-500'>
            {post.tags.map((tag, index)=>{
              return <p key={index} onClick={()=>navigate(`/tags/${tag.replaceAll(" ", "-")}`)} className='cursor-pointer hover:underline'>#{tag}</p>
            })}
        </div>

    </div>
  )
}

export default Card