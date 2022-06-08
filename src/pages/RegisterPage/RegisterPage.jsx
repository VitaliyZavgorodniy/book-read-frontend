import Media from 'react-media';
import styled from 'styled-components';

import RegsiterForm from './RegsiterForm';
import InfoBlockAbout from './InfoBlockAbout';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
const RegisterPage = () => {
  return (
    <Wrapper>

      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {(matches) =>
          matches.small && (
            <>
              <InfoBlockAbout />
              <ButtonBlockWrapper>
                <ButtonWrapper>
                  <CommonButton
                    type="button"
                    title="Login"
                    variant="transparent"
                  />
                </ButtonWrapper>
                <ButtonWrapper>
                  <CommonButton
                    type="button"
                    title="Register"
                    variant="accent"
                  />
                </ButtonWrapper>
              </ButtonBlockWrapper>
            </>
          )
        }
      </Media>

      <RegisterBlock>
        <RegsiterForm />
      </RegisterBlock>
      <Media query="(min-width: 768px)" render={() => <InfoBlockAbout />} />
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
const ButtonBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 275px;
  margin: 0 auto;
  margin-bottom: 40px;
`;
const ButtonWrapper = styled.div`
  width: 130px;
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
