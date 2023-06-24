import React, { useContext, useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import Card from '../Components/Card';
import Loader from '../Components/Loader'

const BlogPage = () => {
    const location = useLocation();
    const {loading, setLoading} = useContext(AppContext);
    const [blogPage, setBlogPage] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    const baseUrl = "https://codehelp-apis.vercel.app/api/get-blog"

    const blogId = location.pathname.split("/").at(-1);
    

    async function fetchBlogPage(){
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlogPage(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            setBlogPage(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchBlogPage();
    }, [blogId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='w-[55%] mx-auto py-10 mb-10 px-3 relative z-0'>

       <BackButton/>

       {loading ? <Loader/> : 
            blogPage ? <Card post ={blogPage}/> :
            <p className=' h-[40vh] flex justify-center items-end text-xl font-semibold'>No Blogs Found</p>
        }

        {loading ? <p></p> :
            relatedBlogs.length!==0 ? 
            <div>
                <h2 className='mt-[5rem] mb-[2rem] text-3xl font-bold'>Related Blogs</h2>
                <div className='flex flex-col gap-6'>
                    {relatedBlogs.map((post)=>{
                        return <Card key={post.id} post ={post}/>})}
                </div>

            </div> :
            blogPage ? <p className=' h-[40vh] flex justify-center items-end text-xl font-semibold'>No Related Blog Found</p> : <p></p>
        }
    </div>
  )
}

export default BlogPage