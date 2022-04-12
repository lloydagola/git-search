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
    loading:boolean
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPer_page: React.Dispatch<React.SetStateAction<number>>  
    setLoading: (loading: boolean) => void
}

const SearchPage = (props:Props) => {

  const {
    searchTerm,
    results,
    searchCount = 0,
    page,
    per_page,
    loading,
    submitSearch,
    setSearchTerm,
    setPage,
    setPer_page,
    setLoading
  } = props

 
  return (
    <>
        <h1>Search Users</h1>
        <div>
          <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} submitSearch={submitSearch}/>  
          <ResultsPanel 
            results={results} 
            searchCount={searchCount}
            page={page}
            per_page={per_page}
            setPage={setPage}
            setPer_page={setPer_page} 
            loading={false}
            setLoading={setLoading}
          />
        </div>   
    </>
  )
}

export default SearchPage
