import styled from 'styled-components';

export const Button = styled.div`
position: fixed;
bottom: 2rem;
width: 6rem;
height: 3rem;
font-size: 3rem; 
z-index: 1; 
cursor: pointer;
text-align: center;
border-radius: 50px;
align-items: center;
justify-content: center;
border-color: transparent;
margin-left: none;
`;

export const TopButtonText = styled.button`
background-color: white;
color: black;
width: 100%;
height: 100%;
border-radius: 50px;
font-family: 'Rockwell', sans-serif;
border-color: transparent;
justify-content: center;
align-items: center;
text-align: center;
font-size: calc(7px + 1vmin);
padding-top: .5em;
padding-bottom: .5em;
`;