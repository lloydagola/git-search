import styled from "styled-components"
import {Link} from 'react-router-dom'
import {devices} from '../utils/screenUtils'

export const StyledSearchBar = styled.input` 
    width:400px;
    height: 2.4rem;
    border-radius: 4rem;
    text-align: center;
    color: #444;
    font-size: 1rem;
    margin: .4rem;

`
export const StyledAppBody = styled.div`
    width: 96vw;
    margin:auto;

    @media ${devices.tabletL} {
        width: fit-content;
        margin: 1rem auto 0 auto;
    }
`
export const StyledAvatar = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.2rem;
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
    padding: .4rem;
}

img{            
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin:.2rem;
}
span{
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
        padding: .2rem;
    }


`
export const StyledPageNav = styled.ul` 
    display: flex;
    flex-direction: row;
    list-style-type: none;
    
    span{
        cursor: pointer;
    }
`
export const StyledPageNumber = styled.span`
    li{
        list-style: none;
        margin: 0 .5rem;
        padding: .5rem;
        background: #0392da;
        height: 1.2rem;
        min-width: 1.2rem;
        border-radius: 4rem;
        cursor: pointer;
        font-size: .8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const StyledUserGrid = styled.div` 
  height: 500px;
  gap: 0px 0px; 
  display:flex;
  flex-direction: column;

  @media ${devices.tabletL}{ 
    display: grid; 
    grid-template-columns: 0.7fr 1.3fr; 
    grid-template-rows: 0.7fr 1.3fr; 
    grid-template-areas: 
      "avatar name"
      "blank user_details";
  }

  
`
export const StyledUserPageAvatar = styled.img` 
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  border-radius: 50%;
  padding:2rem;
  border: 1px solid #fff;
  margin: 2rem 0;
`
export const StyledUserSummary = styled.div`
  text-align: left;
  margin:2rem

  
`
export const StyledParagraph = styled.p`
    border: 1px solid #fff;
    padding: 0.5rem 1rem ;

    h1{
        margin: 0;
    }
`
export const StyledUserDetails = styled.div`
  text-align: left;
  padding:2rem;
  padding: 0 2rem
`
export const StyledSimpleNav = styled.nav` 
    a{
        color: #fff;
    }
`