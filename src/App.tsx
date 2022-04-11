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
import ResultsPanel from './components/resultsPanel/ResultsPanel'


const App:React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<User[]>([])
  const [resultsCount, setResultsCount] = useState<number>(0)

  const [page, setPage] = useState(1)
  const [per_page, setPer_page] = useState(6)

  const handleSearch = async (searchTerm:string) => {

    if(results.length > 0){
      setResults([])
    }

    const {items, total_count} = await fetchUsers(searchTerm, page, per_page)
    if(items.length <1){
      console.log('sorry, no users found...')
      return
    }

     setResults(items)
     setResultsCount(total_count)
     return
  }


  const submitSearch = (e:React.FormEvent) => {
    e.preventDefault()

    handleSearch(searchTerm)
  }  
  
  
  useEffect(() => {

    if(results.length > 0){
      console.log('safisha rada...')
      setResults([])
    }

    const timer = setTimeout(() => {
       searchTerm != '' && handleSearch(searchTerm)
    } , 500)

    return () => {
        clearTimeout(timer)
        setResults([])
    }
  }, [searchTerm])

  useEffect(
    () => {
      
      if(searchTerm != ''){
        handleSearch(searchTerm)
      }

    },
    [page],
  )
  


  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <SearchPage
            searchTerm = {searchTerm}
            results ={results}
            searchCount={resultsCount}
            page={page}
            per_page={per_page}
            submitSearch ={submitSearch}
            setSearchTerm = {setSearchTerm}
            setPage={setPage}
            setPer_page={setPer_page}
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
