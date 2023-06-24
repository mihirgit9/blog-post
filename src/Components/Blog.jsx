import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Loader from './Loader';
import Card from './Card';

const Blog = () => {
    const {loading, posts} = useContext(AppContext);
    
    return (
        <div className='w-[55%] mx-auto  py-10 mb-10 px-3 flex flex-col gap-10 '>
            {loading ? <Loader/> :
                (posts.length===0 ? <p className='flex justify-center items-end h-[40vh] text-xl font-bold'>No Blogs Found</p> :
                    posts.map((post)=>{
                        return <Card key={post.id} post={post}/>
                    })
                )
            }
        </div>
    )
}

export default Blog