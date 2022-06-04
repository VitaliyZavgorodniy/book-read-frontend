import styled from 'styled-components';

const Quotes = () => {
  return (
    <Wrapper>
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
  background-image: url(/static/media/kovicki.9abb887f.svg);
  background-repeat: no-repeat;
  background-position-x: 49%;
  background-position-y: 25%;
  padding-top: 70px;
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
  
  :before{
        content: "";
    background-color: rgba(36,42,55,.5);
    position: absolute;
    width: 100px;
    height: 1px;
    bottom: 13%;
    left: 50px;
    opacity: 1;
    margin-bottom: 20px;
}
  }
`;

export default Quotes;
