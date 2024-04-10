import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../common/button';
import { Container } from '../common/styled';
import {
  StyledForm,
  StyledField,
  StyledInputWraper,
  StyledLabel,
  Error,
  StyledTitleSpan,
  StyledTitle,
  StyledText,
  StyledSection,
} from './styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Contact = () => {
  return (
    <StyledSection id="contact">
        
      <Container>
        <StyledTitle>
          Feeling like you have seen enough?
          <br />
          <StyledTitleSpan>Lets work together!</StyledTitleSpan>
        </StyledTitle>
        <Formik
          initialValues={{
            name: '',
            message: '',
            email: '',
          }}
          validationSchema={contactSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <StyledInputWraper>
                <StyledLabel>
                  Name
                  <StyledField name="name" />
                  {errors.name && touched.name ? (
                    <Error>{errors.name}</Error>
                  ) : null}
                </StyledLabel>
                <StyledLabel>
                  Email
                  <StyledField name="email" type="email" />
                  {errors.email && touched.email ? (
                    <Error>{errors.email}</Error>
                  ) : null}
                </StyledLabel>
              </StyledInputWraper>
              <StyledLabel>
                Message
                <StyledField name="message" />
                {errors.message && touched.message ? (
                  <Error>{errors.message}</Error>
                ) : null}
              </StyledLabel>
              <Button id="contact" />
            </StyledForm>
          )}
        </Formik>
        <StyledText>
          Or if you have any questions left <br />
          Be sure to contact us, we always love to hear you!
        </StyledText>
      </Container>
    </StyledSection>
  );
};

export default Contact;
