import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';
import Label from '../shared-comps/Label';
import { useField } from "formik";
import ErrorMessage from './ErrorMessage';

const PwordInput = styled.input.attrs({
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

const PasswordInput =  ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label>{label}</Label>
            <PwordInput {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMessage message={meta.error} />
            ): null}   
        </>
    );
};

export default PasswordInput;