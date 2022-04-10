import React, {useEffect, useState, } from 'react'
import {useParams} from 'react-router-dom'

import {UserDetails} from '../models/user'

//services
import {fetchUser} from '../services/appService'


const UserPage = () => {
    const [userDetails, setUserDetails] = useState<UserDetails>()

    let { user = '' } = useParams();

    const handleFetchUser = async (searchTerm:string) => {
        const res = await fetchUser(searchTerm)
        setUserDetails(res)
    }

    useEffect(() => {
        console.log(user)
        handleFetchUser(user)
    
      return () => {
        console.log('cleanup')
      }
    }, [user])
    
    
  return (
    <div>hello {userDetails?.login}</div>
  )
}

export default UserPage
