import styled from 'styled-components';

export const Item = styled.li`
display: flex;
gap: 10px;
align-items: center;

`

export const Button = styled.button`
width: 60px;
height: 25px;
background-color: #FAFBFC;
border: 1px solid #878787;
border-radius: 6px;
box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
color: #24292E;
cursor: pointer;
font-size: 12px;
font-weight: 500;
&:hover {
  background-color: #8cb6fa;
}
`