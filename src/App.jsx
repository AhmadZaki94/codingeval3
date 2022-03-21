import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BookDetailsPage } from './Components/BookDetailsPage/BookDetailsPage'
import { BookCard } from './components/BookCard/BookCard'
import { Home } from './Components/Home/Home'

function App() {
  

  return (
    <div className="App">
        <BookDetailsPage/>
        <BookCard/>
        <Home/>
        <Navbar/>
        <NotFound/>
        <Section/>
        <SectionAndFilterButtons/>
    </div>
  )
}

export default App
