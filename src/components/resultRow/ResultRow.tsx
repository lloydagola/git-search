import React, {useState, useEffect} from 'react'
import axios from "axios"

import {
    StyledAvatar,
    StyledLink,
    StyledName,
    StyledFollowers,
    StyledResultGrid,
} from "../../styles/app.style"



//models
import {User} from '../../models/user'


interface UserProps{
    user: User
}

const ResultRow = ({user}:UserProps) => {
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

export default ResultRow