
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import NoPage from './Pages/NoPage';
import BlogPage from './Pages/BlogPage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (
    <div className='w-full mt-8 overflow-x-hidden'>

      <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/blogs/:blogId' element={<BlogPage/>} />
        <Route path='/tags/:tag' element={<TagPage/>} />
        <Route path='/categories/:category' element={<CategoryPage/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
