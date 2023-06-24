import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pager = () => {
    const {page, totalPages, pageChangeHandler, posts} = useContext(AppContext);

    return (
        <div className='w-[80%] bg-white mx-auto text-center border-t-[2px] text-md py-3 rounded-b-md flex justify-between items-center px-6 fixed bottom-0 left-[10%]'>
            {posts.length!==0 &&
                <div className='flex gap-4'>
                    {page>1 &&
                        <button onClick={()=>pageChangeHandler(page-1)}
                            className='border-slate-400 border-[1px] px-4 py-1 rounded-sm bg-slate-200 select-none'
                        >Prev</button>
                    }

                    {page<totalPages &&
                        <button onClick={()=>pageChangeHandler(page+1)}
                            className='border-slate-400 border-[1px] px-4 py-1 rounded-sm bg-slate-200 select-none'
                        >Next</button>
                    }
                </div>
            }

            {posts.length!==0 &&
                <p>Page {page} of {totalPages}</p> 
            } 
        </div>
    )
}

export default Pager