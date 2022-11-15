// Write your Character component here

import React from 'react'
import styled from 'styled-components';

const StyledCharacter = styled.div`
display:flex
justify-content: space-between;


 width:70%;
 padding-bottom:5%
 
`


const StyledContainer = styled.div`
   
   display: flex;
   align-items: baseline;
   justify-content: space-between;
   align-content:center;
   border-style: ridge; 
 border-color: grey;
`

const Character = (props) => {
     return (
        <StyledCharacter className='characterWrapper'>
          <StyledContainer ClassName='characterContainer'>  
            <h2>{props.info.name}</h2>
            <p>{props.info.birth_year}</p> 
          </StyledContainer>
        </StyledCharacter>
    )}
    








export default Character;