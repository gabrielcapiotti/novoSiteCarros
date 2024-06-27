// buttomStyled.js
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtomStyled = styled.button`
    background-color: #4b4b4b;
    color: white;
    margin: 15px;
    
    width: 100px;
    font-size: 11px;
    border: 0px solid black;
    align-items: center;

    
    padding: 10px 20px;
    border-radius: 15px;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #700c0c;
        color: black;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;
