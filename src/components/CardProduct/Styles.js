import styled from 'styled-components';

export const Hug = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Button = styled.button`
    border-radius: 8px 0px 8px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: #5cb646;
    background-color: transparent;
    width: 90px;
    height: 31px;
    color: #5cb646;
    align-self: flex-end;
    margin-top: -17px;
    position: relative;
    z-index: 3;

    :focus{
        outline:none;
    }
`;

export const ButtonRemove = styled.button`
    border-radius: 8px 0px 8px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: #e02020;
    background-color: transparent;
    width: 90px;
    height: 31px;
    color: #e02020;
    align-self: flex-end;
    margin-top: -17px;
    position: relative;
    z-index: 3;

    :focus{
        outline:none;
    }
`;

export const ContainerQtd = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DivQtde = styled.div`
    border-radius: 8px 0px 8px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: #5cb646;
    background-color: transparent;
    width: 33px;
    height: 33px;
`;

export const DivName = styled.div`
    display: flex;
    font-size: 16px;
    color: #5cb646;
    margin: 10px 0px 10px 0px;
    font-weight: 500;
`;

export const DivDesc = styled.div`
    display: flex;
    font-size: 12px;
    color: #b8b8b8;
`;

export const DivPrice = styled.div`
    display: flex;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 600;
    width: 100px;
`;

export const Hr = styled.hr`
    border-color: black;
    width: 328px;
`;

export const P = styled.p`
    margin: 0 0 0 15px;
    font-size: 16px;
    font-weight: 500;

`;

export const DivRestName = styled.p`
    font-size: 16px;
    color: #5cb646;
    margin: .3em;
    font-weight: 500;

`;

export const DivCategory = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: .3em;

`;

export const Container = styled.div`
    display: flex;
`;

export const DivDeli = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: .3em 1.1em .3em .3em;

`;

export const DivShipping = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: .3em .3em .3em 1.1em;

`;

export const DivAdress = styled.p`
    font-size: 16px;
    color: #b8b8b8;
    margin: .3em;

`;