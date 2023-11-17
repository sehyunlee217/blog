// import { useState } from 'react';
import './App.css';
import Navbar from './components/navBar';
import Post from './components/post';

function App() {
  return (
    <div>
      <header className='flex justify-between p-4'>
        <a href=''>My Blog</a>
        <Navbar />
        <div className='flex gap-2'>
          <a>(search)</a>
          <a>(night mode)</a>
          <div>22:10</div>
          <div>lang</div>
        </div>
      </header>
      <div className=' justify-center grid grid-cols-[repeat(auto-fill,minmax(400px,600px))] p-6 gap-6'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>


    </div>
  );
}

export default App;
