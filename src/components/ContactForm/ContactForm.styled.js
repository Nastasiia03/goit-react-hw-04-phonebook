import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField} from 'formik';

export const Form = styled(FormikForm)`
width: 350px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid #2a2a2a;
gap: 20px;
`

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Field = styled(FormikField)`
width: 170px;
height: 20px;
border: 1px solid #c9c7c7;
`

export const Button = styled.button`
width: 100px;
height: 25px;
background-color: #FAFBFC;
border: 1px solid #878787;
border-radius: 6px;
box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
color: #24292E;
cursor: pointer;
font-size: 14px;
font-weight: 500;
&:hover {
  background-color: #8cb6fa;
}
`

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;