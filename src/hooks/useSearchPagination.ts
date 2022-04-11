import {useMemo} from 'react'

interface Props {
  resultsCount: number
  resultsPerPage: number
  currentPage: number
  siblings: number
}

export const usePagination = ({
    resultsCount = 0,
    resultsPerPage = 0,
    siblings = 1,
    currentPage = 0
  }:Props) => {
    const paginationRange = useMemo(() => {

       const candidates = Math.ceil(resultsCount / resultsPerPage);
        
    }, [resultsCount, resultsPerPage, siblings, currentPage]);
  
    return paginationRange;
  };