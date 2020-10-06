import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    background-color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 44px;
    border-bottom: 1px solid #CBCBCB;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = (props) => {
    return ( 
        <HeaderContainer>
            {props.title}
        </HeaderContainer>
     );
}
 
export default Header;