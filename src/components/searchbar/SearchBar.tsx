import React, {useState, useEffect} from "react"
import {StyledSearchBar} from '../../styles/app.style'



interface Props{
    searchTerm: string
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}


const SearchBar : React.FC<Props> = ({searchTerm = '', setSearchTerm}) => {
    const placeholder:string = 'Search Github Users'
    
    return <StyledSearchBar 
                type='search' 
                placeholder={placeholder} 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => console.log(`search for ${searchTerm}?`)}
            />
}

export default SearchBar