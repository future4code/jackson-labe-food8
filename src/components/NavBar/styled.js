import styled from 'styled-components'

export const NavBarContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
`

export const NavBarButton = styled.div`
    height: 49px;
    width: 120px;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`