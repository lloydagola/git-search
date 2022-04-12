import React, {useEffect, useState, } from 'react'
import {useParams} from 'react-router-dom'

import styled from 'styled-components'

import Followers from '../components/followers/Followers'

import {StyledAppBody} from '../styles/app.style'

import {UserDetails} from '../models/user'

//services
import {fetchUser} from '../services/appService'


const StyledUserGrid = styled.div`  
  display: grid; 
  height: 500px;
  grid-template-columns: 0.7fr 1.3fr; 
  grid-template-rows: 0.7fr 1.3fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "avatar name"
    "blank user_details";
`

const StyledAvatar = styled.img` 
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  border-radius: 50%;
  padding:2rem
`

const StyledUserSummary = styled.div`
  text-align: left;
  margin:2rem
`
const StyledUserDetails = styled.div`
  text-align: left;
  padding: 0 2rem
`



const UserPage = () => {
    const [userDetails, setUserDetails] = useState<UserDetails>()
    const [userName, setUserName] = useState<string>('')

    let { user = '' } = useParams();

    const handleFetchUser = async (searchTerm:string) => {
        const res = await fetchUser(searchTerm)
        setUserDetails(res)
        setUserName(res.login)
    }

    useEffect(() => {
        console.log(user)
        console.log(userName)
        handleFetchUser(user)
    
      return () => {
        console.log('cleanup')
      }
    }, [user])
    
    
  return (<>
          
          <StyledAppBody>
            <StyledUserGrid>
              <StyledAvatar src={userDetails?.avatar_url} alt={userDetails?.login} />
              <StyledUserSummary>
                <h1>{userName}</h1>
                <p>{ userDetails?.name }</p>
                <p>{ userDetails?.bio }</p>
                <p>{ userDetails?.location }</p>
              </StyledUserSummary>
              <span/>
              <StyledUserDetails>
                <p>{ userDetails?.blog }</p>
                <Followers login={userName?userName:''}/>
              </StyledUserDetails>

            </StyledUserGrid>
            
          </StyledAppBody>
    
      </>)
}

export default UserPage
