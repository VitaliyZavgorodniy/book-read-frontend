import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Quotes = () => {
  return (
    <Wrapper>
      <Quotestext>
        Books are the ships of thoughts, wandering through the waves of time.
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
  }
  @media ${breakpoints.laptop} {
    width: 447px;
    height: 127px;
  }
`;
const Quotestext = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #242a37;
  margin: 0 auto;
`;

const AuthorTeg = styled.div`
  width: 200px;
  margin: 0 auto;
  position: relative;
`;

const Author = styled.p`
  margin-top: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.7%;
  text-align: center;
  color: #898f9f;

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
`;

export default Quotes;
