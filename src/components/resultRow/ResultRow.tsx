import {
    StyledAvatar,
    StyledLink,
    StyledName,
    StyledResultGrid,
} from "../../styles/app.style"

import {UserProps} from "../../models/user"
import Followers from "../followers/Followers"


const ResultRow = ({user}:UserProps) => {

    console.log(user)
    

    return  <StyledLink to={`/results/${user.login}`} key={user.id}>
                <StyledResultGrid>
                    <StyledAvatar src={user.avatar_url} alt={user.login} />
                    <div>
                        <StyledName>{user.login}</StyledName>
                        <Followers login={user.login}/>
                       
                    </div>
                </StyledResultGrid>
            </StyledLink>

}

export default ResultRow