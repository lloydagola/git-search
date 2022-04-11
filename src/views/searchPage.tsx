import React, {useState, useEffect} from 'react'
import {User} from '../models/user'
import SearchBar from '../components/searchbar/SearchBar'
import ResultsPanel from '../components/resultsPanel/ResultsPanel'


interface Props{
    submitSearch: (e: React.FormEvent) => void
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    results: User[]
    searchCount:number

}

const SearchPage = (props:Props) => {

  const {
    submitSearch,
    searchTerm,
    setSearchTerm,
    results,
    searchCount = 0
  } = props

 
  return (
    <>
        <h1>Search Users</h1>
        <div>
          <form action="" onSubmit={submitSearch}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>          
          </form>
          <ResultsPanel results={results} searchCount={searchCount} />
        </div>   
    </>
  )
}

export default SearchPage
