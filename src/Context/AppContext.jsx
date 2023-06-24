import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import {baseUrl} from '../baseUrl'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// creating context
export const AppContext = createContext();

//providing context
const AppContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const navigate = useNavigate();

    //Api call function
    async function fetchBlogData(url){
        setLoading(true);

        try{
            const result = await fetch(url);
            const data = await result.json();
            setPage(data.page);
            setTotalPages(data.totalPages);
            setPosts(data.posts);
        }
        catch(error){
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(()=>{
        const page = searchParams.get("page") ?? 1;
        let url = `${baseUrl}?page=${Number(page)}`
        if(location.pathname.includes("tags")){
            const tag = location.pathname.split("/").at(-1).replaceAll("-", " " );
            url += `&tag=${tag}`;
        }
        else if(location.pathname.includes("categories")){
            const category =location.pathname.split("/").at(-1).replaceAll("-", " ");
            url += `&category=${category}`;
        }
        fetchBlogData(url);
    }, [location.pathname, searchParams]);

    function pageChangeHandler(page){
        navigate( { search: `?page=${page}`});
    }


    //accumulating values
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogData,
        pageChangeHandler
    }

    //returning value to provider
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;