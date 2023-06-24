import React, { useContext } from 'react'
import BackButton from '../Components/BackButton'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Loader from '../Components/Loader';
import Card from '../Components/Card';
import Pager from '../Components/Pager';

const CategoryPage = () => {
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
    const {loading, posts} = useContext(AppContext);
  return (
    <div className='w-[55%] mx-auto py-10 mb-10 px-3 relative z-0'>

        <BackButton/>

        <h1 className=' text-2xl font-bold mb-10'>Blogs on <span className='underline'>{category} </span></h1>

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

export default CategoryPage