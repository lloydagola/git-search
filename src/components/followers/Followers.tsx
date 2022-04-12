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
    const [error, setError] = useState({message:'', status:false})


    const handleFetchUserFollowers = async () => {
        const res = await fetchUserFollowers(login)
        
        console.log(res)

        if(res){
            setFollowers(res)        
        }
        else{
            console.log('could not fetch followers')
            setError({
                message: 'could not fetch followers',
                status: true
            })
        }
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
        {error.status && <p>An error occurred {error.message}</p> }
        {<p>Followers: {followers?.length}</p> }
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