import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
max-width: 400px;
margin: 0 auto;

margin-bottom: 2%;
`

export const StyledField = styled(Field)`
    background: transparent;
    border: none;
    border-bottom: 1px solid #444;
    height: 20px;
    width: 100%;

    color: #fff;
`
export const StyledInputWraper = styled.div`
display: flex;
gap: 15px;
`
export const StyledLabel = styled.label`
color: #fff;
display: flex;
gap: 15px;
padding-bottom: 20px;
position: relative;
width: 100%;
`

export const Error = styled.div`
color: red;
position: absolute;
bottom: 0;
left: 0;
`

export const StyledTitle = styled.h4`
    display: block;
    text-align: center;

    margin-bottom: 5%;
`

export const StyledTitleSpan = styled.span`
    color: #9365FF;
`
export const StyledText = styled.p`
    display: block;
    text-align: center;

    font-size: 15px;
    
`

export const StyledSection = styled.section`

`
