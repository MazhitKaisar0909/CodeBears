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
`;

export const StyledField = styled(Field)`
  background: transparent;
  border: none;
  border-bottom: 1px solid #444;
  height: 20px;
  width: 100%;

  color: #fff;
`;
export const StyledInputWraper = styled.div`
  display: flex;
  gap: 15px;
`;
export const StyledLabel = styled.label`
  color: #fff;
  display: flex;
  gap: 15px;
  padding-bottom: 20px;
  position: relative;
  width: 100%;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

export const Error = styled.div`
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const StyledTitle = styled.h4`
  display: block;
  text-align: center;

  margin-bottom: 5%;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: -0.02em;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 33px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
    margin-bottom: 110px;
  }
`;

export const StyledTitleSpan = styled.span`
  color: #9365ff;
`;
export const StyledText = styled.p`
  display: block;
  text-align: center;

  font-size: 15px;

  margin-bottom: 80px;

  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 104%;
  letter-spacing: -0.02em;

  color: #9f9f9f;

  @media (min-width: 768px) {
    margin-bottom: 120px;
    font-size: 15px;
  }
`;

export const StyledSection = styled.section``;
