import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { CreateBooks, EditBook, ShowBook, Home, DeleteBook } from './components'

function App() {

  return (
    <div className='bg-slate-900 text-gray-300 h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books/create' element={<CreateBooks/>}/>
        <Route path='/books/details/:id' element={<ShowBook/>}/>
        <Route path='/books/edit/:id' element={<EditBook/>}/>
        <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      </Routes>
      
    </div>
  )
}

export default App
