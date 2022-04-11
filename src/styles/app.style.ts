import styled from "styled-components"
import {Link} from 'react-router-dom'

export const StyledSearchBar = styled.input` 
    width: 80%;
    height: 2.4rem;
    border-radius: 4rem;
    text-align: center;
    color: #444;
    font-size: 1.6rem;
    margin: .4rem;

`
export const StyledResults = styled.div`
    height: 75vh;
    width: 50vw;
    margin: 2rem auto;
`
export const StyledAvatar = styled.img`
width: 4rem;
height: 4rem;
border-radius: 50%;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`
export const StyledName = styled.p`
font-weight: bold;
grid-area: name;
margin:0;
text-decoration: none;
`
export const StyledFollowers = styled.div`
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
export const StyledResultGrid = styled.div`
    display: flex;
    flex-direction: row;

    
    grid-gap: .4rem;
    text-align: left;
    padding: .4rem;
    border-bottom: 1px solid #0392da;
    text-decoration: none;
    color: #fff;

    >span{
        padding: .4rem;
    }


`
export const StyledPageNav = styled.ul` 
    display: flex;
    flex-direction: row;
`
export const StyledPageNumber = styled.span`
    li{
        list-style: none;
        margin: 0 .5rem;
        padding: .5rem;
        background: #0392da;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        cursor: pointer;
    }
`