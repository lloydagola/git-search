import axios from "axios"
import React, {useState, useEffect} from "react"
import {
    StyledResults,
    StyledAvatar,
    StyledLink,
    StyledName,
    StyledFollowers,
    StyledResultGrid,
    StyledPageNav,
    StyledPageNumber
} from "../../styles/app.style"
//models
import {User} from '../../models/user'



interface Props{
    results: User[]
    searchCount: number
    page: number
    per_page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    setPer_page: React.Dispatch<React.SetStateAction<number>>
}

interface UserProps{
    user: User
}

interface PageProps{
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    
}

const Result = ({user}:UserProps) => {
    const [followers, setFollowers] = useState([])


    const fetchUserFollowers = async () => {

        try{
            const {data} = await axios.get(`https://api.github.com/users/${user.login}/followers`)
            setFollowers(data)
            console.log(followers)

        }
        catch(err){
            console.log("could not fetch followers...")
        }

        
    }

    useEffect(() => {
        if(followers.length > 0){
            console.log('clearing followers in useEffect')
            setFollowers([])
        }
        
        console.log('fetchUserFollowers()')

        return () => {
            setFollowers([])
            console.log('clearing followers  in useEffect return...')
          }
    }, [])
    

    return  <StyledLink to={`/results/${user.login}`} key={user.id}>
                <StyledResultGrid>
                    <StyledAvatar src={user.avatar_url} alt={user.login} />
                    <span>
                        <StyledName>{user.login}</StyledName>
                        <StyledFollowers>
                            <p>Followers: {followers.length}</p> 
                            {followers.length > 0 && followers.slice(0,6).map(({login = '', avatar_url=''}) => <div><img src={avatar_url}/></div>)} 
                        </StyledFollowers>
                    </span>
                </StyledResultGrid>
            </StyledLink>

}

const ResultsPanel = ({
    results = [], 
    searchCount,    
    page,
    per_page,
    setPage,
    setPer_page
}:Props) => {
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
            {currentResults.length> 0 && currentResults.map((user:User) => <Result key={user.id} user={user}/>)}
        </StyledResults>
    }
    
    
    return <>
        {renderUsers()}
        <StyledPageNav>{renderPageNumbers}</StyledPageNav>
    </>

}


export default ResultsPanel