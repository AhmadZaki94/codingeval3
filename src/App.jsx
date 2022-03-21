import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { BookDetailsPage } from './Components/BookDetailsPage/BookDetailsPage'
import { BookCard } from './components/BookCard/BookCard'
import { Home } from './Components/Home/Home'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { Section } from './components/NotFound'
import { SortAndFilterButtons } from './components/SortAndFilterButtons'

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
