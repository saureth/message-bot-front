import styled from 'styled-components';
import { device } from '../../shared/media-devices/devices';

const Label= styled.label`
    font-size: 20px;
    margin: 5% 0%;
    @media ${device.mobileL}{
        margin: 2% 0%;
    }
`;

export default Label;