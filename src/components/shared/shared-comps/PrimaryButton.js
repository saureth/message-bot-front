import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';

const PrimaryButton = styled.button.attrs(props => ({
    type: props.type
}))`
    width: 50%;
    border-radius: 25px;
    align-self: center;
    margin: 5% 0%;
    background-color: #7CDEF4;
    color: #E8F9FD;
    border-color: #0F8DA9;
    min-width: 250px;
    min-height: 35px;
    @media ${device.mobileL}{
        width: 25%;
        font-size: 20px;
        margin: 2% 0%;
    }
`;

export default PrimaryButton;