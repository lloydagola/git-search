
import React, {useState, useEffect} from "react"

//models
import {User} from '../../models/user'

//components
import ResultRow from "../resultRow/ResultRow"
import {
    StyledAppBody,
    StyledPageNav,
    StyledPageNumber
} from "../../styles/app.style"

import {arrayFromRange} from '../../utils/searchUtils'



interface ResultsPanelProps{
    results: User[]
    searchCount: number
    page: number
    per_page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPer_page: React.Dispatch<React.SetStateAction<number>>
}


interface PageProps{
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    
}






const ResultsPanel = ({
    results = [], 
    searchCount,    
    page,
    per_page,
    setPage,
    setPer_page
}:ResultsPanelProps) => {
    const [state, setState] = useState({
        currentPage: 1,
        resultsPerPage: 6
      })

    const { currentPage, resultsPerPage } = state;

      // Logic for displaying pages
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);


    const totalNumberOfPages = Math.ceil(searchCount / resultsPerPage);
      // Logic for displaying page numbers
    const pageNumbers = arrayFromRange(1, 10);

    const PageNumbers = () => {

        const renderLinks = () => {
            return pageNumbers.map(pageNumber => <StyledPageNumber
                    key={pageNumber}
                    onClick={ e => setPage(pageNumber)}
                >
                    <li style={{background:`${pageNumber ===  page ? '#fec018' : ''}`}}>{pageNumber}</li>
                </StyledPageNumber>
                )

        }
          
        return <StyledPageNav>{renderLinks()}</StyledPageNav>
    }
    
    const Users = () => {

        return<StyledAppBody>
            {searchCount > 0 && `${searchCount}+ hits`}
            {currentResults.length> 0 && currentResults.map((user:User) => <ResultRow key={user.id} user={user}/>)}
        </StyledAppBody>
    }
    
    
    return <>
        <Users/>
        {currentResults.length > 0 && <PageNumbers/>}
    </>

}



export default ResultsPanel