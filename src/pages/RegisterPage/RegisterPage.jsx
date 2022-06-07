import Media from 'react-media';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import RegsiterForm from './RegsiterForm';
import InfoBlockAbout from './InfoBlockAbout';

const RegisterPage = () => {
  return (
    <Wrapper>
      <RegisterBlock>
        <RegsiterForm />
      </RegisterBlock>
 <Media
    query="(min-width: 768px)"
    render={() => (
        < InfoBlockAbout />
        )}
  />
  
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }

`;

const RegisterBlock = styled.div`
  margin: 0 auto;
  padding: 90px 75px;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.register});
`;



export default RegisterPage;
