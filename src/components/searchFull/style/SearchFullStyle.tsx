import styled from "styled-components";

export const ContainerSearchFull = styled.div`
    width: 100%;
    height: 50px;
    background-color: transparent;
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding: 0px 25px;
    margin-bottom: 10px;
    @media (min-width: 600px) {
        /* display:none; */
    }
    @media (min-width: 700px) {
        div:last-child{
            display:none !important;
        }
    }

`

export const TextResponse= styled.h4`
    width: 20%;
    height: auto;
    line-height: 3;
    color: #cbcbcb;
    font-size: 1em;
    font-weight: 300;
    padding-left: 10px;
`