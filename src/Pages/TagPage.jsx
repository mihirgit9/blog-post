import React, { useContext } from 'react'
import BackButton from '../Components/BackButton'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Card from '../Components/Card';
import Loader from '../Components/Loader'
import Pager from '../Components/Pager'

const TagPage = () => {
    const location = useLocation();
    const tag =location.pathname.split("/").at(-1).replaceAll("-", " ");
    const {loading, posts} = useContext(AppContext);
  return (
    <div className='w-[55%] mx-auto py-10 mb-10 px-3 relative z-0 '>

        <BackButton/>

        <h1 className=' text-2xl font-bold mb-10'>Blogs Tagged <span className='underline text-blue-600'>#{tag} </span></h1>

        {loading ? <Loader/> : 
            posts.length===0 ? <p className='h-[40vh] flex justify-center items-end text-xl font-semibold'>No Post Available</p> :
            <div className='flex flex-col gap-6'>
                {posts.map((post)=>{
                    return <Card key={post.id} post={post}/>
                })}
            </div>
        }

        <Pager/>


    </div>
  )
}

export default TagPage