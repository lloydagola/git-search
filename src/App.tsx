import React, {useState, useEffect} from 'react'
import './App.css'

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


const App:React.FC = () => {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [results, setResults] = useState<User[]>([])
  const [resultsCount, setResultsCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState<number>(1)
  const [per_page, setPer_page] = useState(5)

  const handleSearch = async (searchTerm:string) => {

    if(results.length > 0){
      setResults([])
    }

    try {
      setLoading(true)
      const {items, total_count} = await fetchUsers(searchTerm, page, per_page)
      if(items.length <1){
        console.log('sorry, no users found...')
        return
      }

      setResults(items)
      setResultsCount(total_count)
      setLoading(false)
      return
      
    } catch (error) {
      console.log('could not complete search...')
    }
    
  }


  const submitSearch = (e:React.FormEvent) => {
    e.preventDefault()

    handleSearch(searchTerm)
  }  
  
  
  useEffect(() => {

    if(results.length > 0){
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
              loading={loading}
              setLoading={setLoading}
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
