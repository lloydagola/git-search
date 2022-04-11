import React from 'react'
import SearchBar from '../searchbar/SearchBar'

interface Props{
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm : React.FC<Props> = ({searchTerm = '', setSearchTerm}) => {
  return (
    <form><SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/></form>
  )
}

export default SearchForm
