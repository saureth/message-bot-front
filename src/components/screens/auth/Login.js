import React from 'react'
import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';

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
    font-size: 16px;
    color: #173A8C;
    :focus {
        border-color: #173A8C;
    }
    ::placeholder {
        color: #84A3E8;
        padding-left: 5px;
    }
    width: 100%;
    @media ${device.mobileL}{
        min-width: 250px;
        width: 50%;
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
    width: 100%;
    @media ${device.mobileL}{
        min-width: 250px;
        width: 50%;
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