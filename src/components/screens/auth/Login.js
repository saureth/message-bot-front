import React from 'react'
import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';
import { Formik, Form } from 'formik';
import regex from '../../shared/regex/regex';
import EmailInput from '../../shared/shared-comps/EmailInput';
import Label from '../../shared/shared-comps/Label';
import  * as Yup from 'yup';
import PasswordInput from '../../shared/shared-comps/PasswordInput';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: start;    
    justify-content: center;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    @media ${device.mobileL}{
        align-items: center;    
    }
`;

const Welcome = styled.div`
    font-size: 32px;
`;

const Button = styled.button`
    width: 50%;
    border-radius: 25px;
    align-self: center;
    margin-top: 2%;
    background-color: #7CDEF4;
    color: #E8F9FD;
    border-color: #0F8DA9;
    min-width: 250px;
    min-height: 35px;
    @media ${device.mobileL}{
        width: 25%;
        font-size: 20px;
    }
`;

const Login = () => {
    return (
    <Formik
        initialValues={{ email: '', password: '',}}
        onSubmit={values => console.log(values)}
        validationSchema={Yup.object({
            email: Yup.string()
                .required('Obligatorio')
                .matches(regex,'Formato de correo incorrecto'),
            password: Yup.string()
                .required('Obligatorio')
          }
        )}
    >            
        <Form>
            <Container>
                <Welcome>Welcome!</Welcome>
                <br />
                <Label> Please log in to continue </Label>
                <br />
                <EmailInput name='email' label= "Email" />
                <br />
                <PasswordInput name='password' label= "Password"/>
                <br />
                <Button type='submit'> SIGN IN </Button>
            </Container>
        </Form>
    </Formik>
    );
}

export default Login;