// import Media from 'react-media';
// import styled from 'styled-components';

import InfoBlockAbout from '../MobileGreeting';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
const MobileGreeting = () => {
    return (
        <>
            <InfoBlockAbout />
           <CommonButton type="submit" title="Register" variant="accent" />
        </>
    )
}
export default MobileGreeting;