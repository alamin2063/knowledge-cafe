import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import SpentTime from './components/spentTime/spentTime'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);

  }

  const handleMarkAsRead = (blog) => {
        const newTime = readTime + blog.
        reading_time;
        setReadTime(newTime);

        const idx = blog.id
        const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== idx);
        setBookmarks(remainingBookmarks);
  }


  return (
    <>
      <Header></Header>
      <div className='md:flex flex-row mx-auto max-w-7xl justify-evenly '>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks = {handleAddToBookmarks}></Blogs>
      <div className='flex flex-col items-center '>
      <SpentTime readTime = {readTime} ></SpentTime>
      <Bookmarks bookmarks ={bookmarks} ></Bookmarks>
      </div>
      </div>
       
    </>
  )
}

export default App
