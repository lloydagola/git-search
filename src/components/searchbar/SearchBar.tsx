import React, {useState, useEffect} from "react"
import styled from 'styled-components'

const StyledSearchBar = styled.input` 
    width: 80%;
    height: 2.4rem;
    border-radius: 4rem;
    text-align: center;
    color: #444;
    font-size: 1.6rem;
    margin: .4rem;

`

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