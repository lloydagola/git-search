import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import styled from 'styled-components'
//models
import {User} from '../../models/user'

interface Props{
    results: User[]
}

interface UserProps{
    user: User
}

const Result = ({user}:UserProps) => {

    const StyledAvatar = styled.img`
        width: 50px;
        height: 50px;
        border-radius: 50%;
    `

    const StyledLink = styled(Link)`
        text-decoration: none;
    `

    const StyledResultGrid = styled.div`
        display: grid;
        grid-template-areas: 
                            "avatar name name" 
                            "avatar desc desc";
        grid-gap: .4rem;
        align-items: center;
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
            grid-area: name;
            margin:0;
            text-decoration: none;
        }
        span{
            grid-area: desc;        
        }
    `

    return  <StyledLink to={`/results/${user.login}`} key={user.id}>
                <StyledResultGrid>
                    <StyledAvatar src={user.avatar_url} alt={user.login} />
                    <p>{user.login}</p>
                    <span>score: {user.score}</span>
                </StyledResultGrid>
            </StyledLink>

}

const AutocompletePanel = ({results = []}:Props) => {
    
    const renderUsers = () => {

        return<>
            {results.length> 0 && results.slice(0, 10).map((user:User) => <Result user={user}/>)}
            {results.length < 1 && <>0</>}
        </>
    }
    
    
    return <>
        {renderUsers()}
    </>

}

export default AutocompletePanel