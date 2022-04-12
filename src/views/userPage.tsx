import React, {useEffect, useState, } from 'react'
import {useParams} from 'react-router-dom'

import styled from 'styled-components'

import Followers from '../components/followers/Followers'

import {StyledAppBody} from '../styles/app.style'

import {UserDetails} from '../models/user'

//services
import {fetchUser} from '../services/appService'
import { devices } from '../utils/screenUtils'

import {
  StyledUserGrid,
  StyledUserPageAvatar,
  StyledUserSummary,
  StyledUserDetails,
  StyledParagraph
} from '../styles/app.style'





const UserPage = () => {
    const [userDetails, setUserDetails] = useState<UserDetails>()
    const [userName, setUserName] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [bio, setBio] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [blog, setBlog] = useState<string>('')


    let { user = '' } = useParams();

    const handleFetchUser = async (searchTerm:string) => {
        const res = await fetchUser(searchTerm)
        setUserDetails(res)
        setUserName(res.login)
        setName(res.name)
        setBio(res.bio)
        setLocation(res.location)
        setBlog(res.blog)
    }

    useEffect(() => {
        console.log(user)
        console.log(userName)
        handleFetchUser(user)
    
      return () => {
        console.log('cleanup')
      }
    }, [user])

    const renderAvatar = () => {

      if(!userDetails || !userDetails.avatar_url){
        return <StyledUserPageAvatar src='/assets/images/user.jpg' alt={userDetails?.login}/>
      }
      
      return <StyledUserPageAvatar src={userDetails?.avatar_url} alt={userDetails?.login} />
      

    }

    const renderUserName = (userName:string) => {
      if(!userName){
        return <StyledParagraph><h1>User name</h1></StyledParagraph>
      }
      return <StyledParagraph><h1>{userName}</h1></StyledParagraph>
    }

    const renderName = (name:string) => {
      if(!userName){
        return <StyledParagraph>...no name</StyledParagraph>
      }
      return <StyledParagraph>{name}</StyledParagraph>
    }

    const renderBio = (bio:string) => {
      if(!bio){
        return <StyledParagraph>...no bio</StyledParagraph>
      }
      return <StyledParagraph>{ bio }</StyledParagraph>
    }

    const renderLocation = (location:string) => {
      if(!location){
        return <StyledParagraph>...no location</StyledParagraph>
      }
      return <StyledParagraph>{ location }</StyledParagraph>
    }
    const renderBlog = (blog:string) => {
      if(!blog){
        return <StyledParagraph>...no blog</StyledParagraph>
      }
      return <StyledParagraph>{ blog }</StyledParagraph>
    }
    
    
  return (<>          
          <StyledAppBody>
            <StyledUserGrid>
              {renderAvatar()}
              <StyledUserSummary>
                {renderUserName(userName)}
                {renderName(name)}
                {renderBio(bio)}                
                {renderLocation(location) }
                {renderBlog(blog)}
              </StyledUserSummary>
              <span/>
              <StyledUserDetails>
              </StyledUserDetails>

            </StyledUserGrid>
            
          </StyledAppBody>
    
      </>)
}

export default UserPage
