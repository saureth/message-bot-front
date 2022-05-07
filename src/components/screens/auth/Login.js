import React from 'react'
import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';
import { Formik, Form } from 'formik';
import regex from '../../shared/regex/regex';
import EmailInput from '../../shared/shared-comps/EmailInput';
import Label from '../../shared/shared-comps/Label';
import  * as Yup from 'yup';
import PasswordInput from '../../shared/shared-comps/PasswordInput';
import PrimaryButton from '../../shared/shared-comps/PrimaryButton';
import {
    useMutation
} from "@apollo/client";
import userMutations from '../../shared/gqls/mutations/userMutations';

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
    margin-bottom: 20%;
    @media ${device.mobileL}{
        margin-bottom:  5%;
    }
`;

const Login = () => {
    const [loginUser] = useMutation(userMutations.loginUser);
    return (
    <Formik
        initialValues={{ email: '', password: '',}}
        onSubmit={values => { 
            loginUser({ variables:{
                loginInput: {
                    email:values.email,
                    password: values.password
                }
            }});
        }}
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
                <Label> Please log in to continue </Label>
                <EmailInput name='email' label= "Email" />
                <PasswordInput name='password' label= "Password"/>
                <br />
                <PrimaryButton type='submit'> SIGN IN </PrimaryButton>
            </Container>
        </Form>
    </Formik>
    );
}

export default Login;