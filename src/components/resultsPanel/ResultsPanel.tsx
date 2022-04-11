import axios from "axios"
import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import styled from 'styled-components'
//models
import {User} from '../../models/user'

interface Props{
    results: User[]
    searchCount: number
}

interface UserProps{
    user: User
}

const Result = ({user}:UserProps) => {
    const [followers, setFollowers] = useState([])

    const StyledAvatar = styled.img`
        width: 50px;
        height: 50px;
        border-radius: 50%;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
    `

    const StyledName = styled.p`
        font-weight: bold;
        grid-area: name;
        margin:0;
        text-decoration: none;
    `
    const StyledFollowers = styled.div`
        display: flex;
        flex-direction: column;

        p{
            margin: 0;
            font-size: 0.8rem;
        }

        img{            
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin:.1rem;
        }
        div{
            display: flex;
            flex-direction: row;
        }
    `

    const StyledResultGrid = styled.div`
        display: grid;
        grid-template-areas: 
                            "avatar name name" 
                            "avatar desc desc";
                            "avatar followers followers";
        grid-gap: .4rem;
        text-align: left;
        padding: .4rem;
        border-bottom: 1px solid #0392da;
        text-decoration: none;
        color: #fff;
        grid-area: name;

        
        img{
            grid-area: avatar;
        }
        p{
           
        }
        span{
            grid-area: desc;        
        }
    `

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
                    <StyledName>{user.login}</StyledName>
                    <StyledFollowers>
                        <p>Followers: {followers.length}</p> 
                        {followers.length > 0 && followers.slice(0,6).map(({login = '', avatar_url=''}) => <div><img src={avatar_url}/></div>)} 
                    </StyledFollowers>
                </StyledResultGrid>
            </StyledLink>

}

const ResultsPanel = ({results = [], searchCount}:Props) => {
    
    const renderUsers = () => {

        return<>
            {results.length > 0 && `${results.length}+ hits`}
            {results.length> 0 && results.map((user:User) => <Result key={user.id} user={user}/>)}
        </>
    }
    
    
    return <>
        {renderUsers()}
    </>

}

const Pagination = ({searchCount = 0}) => {
    const [state, setState] = useState({
        results:[],
        currentPage: 1,
        resultsPerPage: 6
      })

    const { results, currentPage, resultsPerPage } = state;

    const handleClick = (page:number) => {
        setState((pstate) => ({
          ...pstate,
          currentPage: page
        }))
      }

      // Logic for displaying pages
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);


      // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(searchCount / resultsPerPage); i++) {
      pageNumbers.push(i);
    }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            onClick={ e => handleClick(number)}
          >
            {number}
          </li>
        );
      });


      return <ul id="page-numbers">
               {renderPageNumbers}
            </ul>
}

export default ResultsPanel