import React, {useState, useEffect} from 'react'
import './App.css'

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {fetchUsers} from './services/appService'

//models
import {User} from './models/user'

//views
import SearchPage from './views/searchPage'
import UserPage from './views/userPage'

//components
import SearchBar from './components/searchbar/SearchBar'
import AutocompletePanel from './components/autocompletePanel/AutocompletePanel'


const App:React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<User[]>([])

  const handleSearch = async (searchTerm:string) => {

    if(results.length > 0){
      console.log('clearing results in useEffect')
      setResults([])
    }

    const {items} = await fetchUsers(searchTerm)
    if(items.length <1){
      console.log('sorry, no users found...')
      return
    }

     setResults(items)
    console.log('searching for: ', searchTerm)
     return
  }


  const submitSearch = (e:React.FormEvent) => {
    e.preventDefault()

    handleSearch(searchTerm)
  }  
  
  
  useEffect(() => {

    if(results.length > 0){
      console.log('clearing results in useEffect')
      setResults([])
    }

    const timer = setTimeout(() => {
       searchTerm != '' && handleSearch(searchTerm)
    } , 500)

    return () => {
        clearTimeout(timer)
        console.log('clearing useEffect results in return...')
        setResults([])
    }
  }, [searchTerm])


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <SearchPage
              submitSearch ={submitSearch}
              searchTerm = {searchTerm}
              setSearchTerm = {setSearchTerm}
              results ={results}
            />}
          />
          <Route path="/results/:user" element={<UserPage/>}
          />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
