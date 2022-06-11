import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Quotes = () => {
  return (
    <Wrapper>
      <Icon />
      <Quotestext>
        Books are the ships of thoughts, wandering through the waves of time.
      </Quotestext>
      <Author>Francis Bacon</Author>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Quotestext = styled.h1`
  margin: 0 auto;
  margin-bottom: 28px;
  font-family: ${(p) => p.theme.font.familyPrimary};
  font-weight: 500;
  font-size: 13px;
  line-height: 1.22;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};

  @media ${breakpoints.tablet} {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1.58;
  }
`;

const Author = styled.p`
  position: relative;
  font-family: ${(p) => p.theme.font.familyPrimary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.22;
  text-align: center;
  color: ${(p) => p.theme.colors.tertiary};
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    font-size: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 1px;
    background-color: ${(p) => p.theme.colors.authorLine};
    top: -12px;

    @media ${breakpoints.tablet} {
      width: 150px;
    }
  }
`;
const Icon = styled(RiDoubleQuotesL)`
  display: flex;
  width: 27px;
  height: 80px;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.accent};
  @media ${breakpoints.tablet} {
    width: 31px;
    height: 93px;
  }
`;
export default Quotes;
