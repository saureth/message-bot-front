import styled from 'styled-components';
import { useField } from "formik";
import { device } from '../../shared/media-devices/devices';
import Label from '../shared-comps/Label';
import ErrorMessage from './ErrorMessage';

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

const EmailInput =  ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label>{label}</Label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage message={meta.error} />
            ): null}
        </>
    );
};

export default EmailInput;