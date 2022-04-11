import React, {useState, useEffect} from 'react'
import {User} from '../models/user'
import SearchForm from '../components/searchForm/SearchForm'
import ResultsPanel from '../components/resultsPanel/ResultsPanel'


interface Props{
    submitSearch: (e: React.FormEvent) => void
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    results: User[]
    searchCount:number
    page: number
    per_page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPer_page: React.Dispatch<React.SetStateAction<number>>

}

const SearchPage = (props:Props) => {

  const {
    submitSearch,
    searchTerm,
    setSearchTerm,
    results,
    searchCount = 0,
    page,
    per_page,
    setPage,
    setPer_page
  } = props

 
  return (
    <>
        <h1>Search Users</h1>
        <div>
          <form action="" onSubmit={submitSearch}>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>          
          </form>
          <ResultsPanel 
            results={results} 
            searchCount={searchCount}
            page={page}
            per_page={per_page}
            setPage={setPage}
            setPer_page={setPer_page} 
          />
        </div>   
    </>
  )
}

export default SearchPage
