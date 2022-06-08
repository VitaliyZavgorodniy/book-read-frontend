import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Quotes = () => {
  return (
    <Wrapper>
      <Icon />
      <Quotestext>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </Quotestext>
      <AuthorTeg>
        <Author>Бэкон Ф.</Author>
      </AuthorTeg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 447px;
  height: 127px;
  @media ${breakpoints.tablet} {
    width: 477px;
    height: 127px;
    padding-top: 64px;
  }
  @media ${breakpoints.laptop} {
    width: 397px;
    height: 127px;
    padding-top: 206px;
  }
  @media ${breakpoints.desktop} {
    padding-top: 206px;
  }
`;
const Quotestext = styled.h1`
  color: ${(h1) => h1.theme.colors.primary};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  margin: 0 auto;
  width: 100%;

  @media ${breakpoints.mobile} {
    max-width: 229px;
    width: 100%;
  }

  @media ${breakpoints.tablet} {
    font-size: 24px;
    line-height: 38px;
    max-width: 526px;
    width: 100%;
  }
  @media ${breakpoints.laptop} {
    font-size: 24px;
    line-height: 40px;
    width: 397px;
  }
  @media ${breakpoints.desktop} {
    font-size: 24px;
    line-height: 40px;
    width: 100%;
  }
`;

const AuthorTeg = styled.div`
  width: 200px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 71px;
  margin-bottom: 16px;
`;

const Author = styled.p`
  margin-top: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2%;
  text-align: center;
  color: ${(p) => p.theme.colors.tertiary};

  &::before {
    content: '';
    background-color: rgba(36, 42, 55, 0.5);
    position: absolute;
    width: 100px;
    height: 1px;
    bottom: 13%;
    left: 50px;
    opacity: 1;
    margin-bottom: 20px;
  }

  @media ${breakpoints.tablet} {
    font-size: 24px;
    line-height: 1.2%;
  }
  @media ${breakpoints.desktop} {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2%;
  }
`;
const Icon = styled(RiDoubleQuotesL)`
  display: flex;
  width: 27px;
  height: 80px;
  margin: 0 auto;
  color: #ff6b08;

  @media ${breakpoints.laptop} {
    width: 31px;
    height: 93px;
  }
`;

export default Quotes;
