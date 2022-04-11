
import React, {useState, useEffect} from "react"

//models
import {User} from '../../models/user'

//components
import ResultRow from "../resultRow/ResultRow"
import {
    StyledResults,
    StyledPageNav,
    StyledPageNumber
} from "../../styles/app.style"



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


      // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchCount / resultsPerPage); i++) {

        if(i == 10){
            break
        }
      pageNumbers.push(i);
    }

      const renderPageNumbers = pageNumbers.map(pageNumber => {
        return (
          <StyledPageNumber
            key={pageNumber}
            onClick={ e => setPage(pageNumber)}
          >
            <li style={{background:`${pageNumber ===  page ? '#fec018' : ''}`}}>{pageNumber}</li>
          </StyledPageNumber>
        );
      });
    
    const renderUsers = () => {

        return<StyledResults>
            {searchCount > 0 && `${searchCount}+ hits`}
            {currentResults.length> 0 && currentResults.map((user:User) => <ResultRow key={user.id} user={user}/>)}
        </StyledResults>
    }
    
    
    return <>
        {renderUsers()}
        <StyledPageNav>{renderPageNumbers}</StyledPageNav>
    </>

}


export default ResultsPanel