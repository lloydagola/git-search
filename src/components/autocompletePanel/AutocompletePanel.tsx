import React, {useState, useEffect} from "react"
import {Link} from 'react-router-dom'

//models
import {User} from '../../models/user'

interface Props{
    results: User[]
}

interface UserProps{
    user: User
}

const Result = ({user}:UserProps) => {

    return <Link to={`/results/${user.login}`} key={user.id}><p>{user.login}</p></Link>

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