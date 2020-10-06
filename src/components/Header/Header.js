import React from 'react';
import styled from 'styled-components'

import backIcon from '../../assets/back.svg'

import {goBack} from '../../routes/Coordinator'
import { useHistory } from 'react-router-dom'


const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    width: 100vw;
    height: 44px;
    border-bottom: 1px solid #CBCBCB;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto, sans-serif;
    font-size: 16px;
`
const BackImg = styled.img`
    position: absolute;
    left: 0;
    margin-left: 16px;
`


const Header = (props) => {

    const history = useHistory()

    return ( 
        <HeaderContainer>
            {props.back ?
            <BackImg src={backIcon} onClick ={() => goBack(history)}/>:
            ''
            }
            
            {props.title}
        </HeaderContainer>
     );
}
 
export default Header;