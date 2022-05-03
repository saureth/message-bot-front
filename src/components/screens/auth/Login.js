import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: start;    
    justify-content: center;
    margin-left:5%;
`;

const Welcome = styled.div`
    font-size: 32px;
`;

const Label= styled.label`
    font-size: 20px;
`;

const Input = styled.input.attrs(props => ({
    type: 'text',
    placeholder: 'email@test.co',
}))
`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #0F8DA9;
    background-color: transparent;
    width: 50%;
    min-width: 250px;
    font-size: 16px;
    color: #173A8C;
    :focus {
        border-color: #173A8C;
    }
    ::placeholder {
        color: #84A3E8;
        padding-left: 5px;
    }
`;

const Password = styled.input.attrs({
    type: 'password',
    placeholder: '******'
})`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #0F8DA9;
    background-color: transparent;
    width: 50%;
    min-width: 250px;
    font-size: 16px;
    color: #173A8C;
    :focus {
        border-color: #173A8C;
    }
    ::placeholder {
        color: #84A3E8;
        padding-left: 5px;
    }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #66C3FF;
  border-radius: 20%;
`;

const Login = () => {
    return (
        <Container>
            
            <Welcome>Welcome!</Welcome>
            <br />
            <Label> Please log in to continue </Label>
            <br />
            <Label> Email </Label>
            <Input />
            <br />
            <Label> Password </Label>
            <Password />
            <br />
            <Button > Enviar </Button>
        </Container>
    );
}

export default Login;