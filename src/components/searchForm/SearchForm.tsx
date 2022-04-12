import React from 'react'
import SearchBar from '../searchbar/SearchBar'

interface Props{
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    submitSearch: (e: React.FormEvent) => void
}

const SearchForm : React.FC<Props> = ({searchTerm = '', setSearchTerm, submitSearch}) => {

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault()
    submitSearch(e)
  }
  return (
    <form onSubmit={handleSubmitForm}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </form>
  )
}

export default SearchForm
