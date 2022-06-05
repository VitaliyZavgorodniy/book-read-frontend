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

      <Block>
        <InfoBlockAbout />
      </Block>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const RegisterBlock = styled.div`
  padding: 90px 75px;
  background-color: ${(p) => p.theme.colors.bgAlpha};
  background-image: linear-gradient(
      to right,
      ${(p) => p.theme.colors.bgAlpha},
      ${(p) => p.theme.colors.bgAlpha}
    ),
    url(${(p) => p.theme.backgrounds.register});
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 180px;
`;

export default RegisterPage;
