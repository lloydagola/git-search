import React, {useState, useEffect} from 'react'
import {StyledFollowers} from '../../styles/app.style'
import {fetchUserFollowers} from '../../services/appService'

//models
import {UserProps} from '../../models/user'


interface Props{
    login: string
}



const Followers = ({login}:Props) => {
    const [followers, setFollowers] = useState([])


    const handleFetchUserFollowers = async () => {
        const res = await fetchUserFollowers(login)      
        setFollowers(res)        
    }

    useEffect(() => {
        if(followers.length > 0){
            setFollowers([])
        }
        
        handleFetchUserFollowers()

        return () => {
            setFollowers([])
          }
    }, [])


    return <StyledFollowers>
        <p>Followers: {followers.length}</p> 
        <span>
            {
                followers.length > 0 
                && followers
                .slice(0,6)
                .map(({login = '', avatar_url=''}) => <div><img src={avatar_url}/></div>)} 

        </span>
    </StyledFollowers>
}

export default Followers