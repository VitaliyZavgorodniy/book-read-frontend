import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Quotes = () => {
  return (
      <Wrapper>
          <Author>Books Reading</Author>

          <Help>Допоможе вам</Help>
          <List>Швидше сформулювати свою ціль і розпочати читати</List>
          <List>Пропорційно розподілити навантаження на кожний день</List>
          <List>Відстежувати особистий успіх</List>

          <Help>Також ви зможете </Help>
          <List>Формувати особисту думку незалежну від інших</List>
          <List>Підвищити свої професійні якості опираючись на нові знання</List>
          <List>Стати цікавим співрозмовником</List>
     
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

const Help = styled.div`
  color: ${(div) => div.theme.colors.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
  margin-bottom: 14px;
    @media ${breakpoints.tablet} {
   
  }
    @media ${breakpoints.laptop} {
    
  }
`
const List = styled.p`
color: ${(p) => p.theme.colors.tertiary};
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
margin-bottom: 12px;
`
const Author = styled.p`
color: ${(p) => p.theme.colors.primary};
font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 38px;
text-align: center;
   @media ${breakpoints.tablet} {
   margin-bottom: 48px;
  }
    @media ${breakpoints.laptop} {
    margin-bottom: 48px;
  }
`

export default Quotes;
