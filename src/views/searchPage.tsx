import React, {useState, useEffect} from 'react'
import {User} from '../models/user'
import SearchBar from '../components/searchbar/SearchBar'
import AutocompletePanel from '../components/autocompletePanel/AutocompletePanel'


interface Props{
    submitSearch: (e: React.FormEvent) => void
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    results: User[]

}

const SearchPage = (props:Props) => {

  const {
    submitSearch,
    searchTerm,
    setSearchTerm,
    results
  } = props

 
  return (
    <>
        <h1>Search Users</h1>
        <div>
          <form action="" onSubmit={submitSearch}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>          
          </form>
          <AutocompletePanel results={results}/>
        </div>   
    </>
  )
}

export default SearchPage
