
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
import { usePagination, DOTS } from '../../hooks/usePagination'

import {arrayFromRange} from '../../utils/searchUtils'


interface ResultsPanelProps{
    results: User[]
    searchCount: number
    page: number
    per_page: number
    loading: boolean
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPer_page: React.Dispatch<React.SetStateAction<number>>
    setLoading: (loading: boolean) => void;
}

type PaginationRange = number[]

const ResultsPanel = ({
    results = [], 
    searchCount,    
    page,
    per_page,
    setPage,
    setPer_page,
    loading,
    setLoading
}:ResultsPanelProps) => {
    const [state, setState] = useState({
        currentPage: 1,
        resultsPerPage: 6
      })

    const { currentPage, resultsPerPage } = state;
    const siblingCount = 1
    
    const paginationRange:any = usePagination({
        currentPage,
        totalCount:searchCount,
        siblingCount,
        pageSize:per_page
      });

      if (page === 0 || paginationRange.length < 2) {
        return null;
      }

      const onPageChange = (page:number) => {
        setPage(page)
      }
    
      const onNext = () => {
        onPageChange(page + 1);
      };
    
      const onPrevious = () => {
        onPageChange(page - 1);
      };
    
      let lastPage = paginationRange?[paginationRange.length - 1]:0

      //console.log(paginationRange)

      // Logic for displaying pages
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

      // Logic for displaying page numbers
    const pageNumbers = arrayFromRange(1, 10);

    const PageNumbers = () => {

        const renderLinks = () => {
            return paginationRange?.map((pageNumber:number) => <StyledPageNumber
                    key={pageNumber}
                    onClick={ e => onPageChange(pageNumber)}
                >
                    <li style={{background:`${pageNumber ===  page ? '#fec018' : ''}`}}>{pageNumber}</li>
                </StyledPageNumber>
                )

        }
          
        return <StyledPageNav>
            <span
                onClick={onPrevious}
            >
                Previous
            </span>
             {renderLinks()}
             <span
                onClick={onNext}
            >
                Next
            </span>
             </StyledPageNav>
    }
    
    const Users = () => {

        return<StyledAppBody>
            {searchCount > 0 && `${searchCount}+ hits`}
            {currentResults.length> 0 && currentResults.map((user:User) => <ResultRow key={user.id} user={user}/>)}
        </StyledAppBody>
    }
    
    
    return <>
        {loading && <div>Loading...</div>}
        {!loading && <Users/>}
        {!loading && currentResults.length > 0 && <PageNumbers/>}
    </>

}



export default ResultsPanel