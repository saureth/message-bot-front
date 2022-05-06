import styled from 'styled-components';

const ErrorMsg = styled.div`
    color: #941C2F;
`;

const ErrorMessage = ({message}) => {
    return (
        <ErrorMsg> - {message} !</ErrorMsg>
    );
}

export default ErrorMessage;