import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const SkeletonHomePage = () => (
  <Wrapper>
    <InputLine>
      <Bar width="346px" />
      <Bar width="250px" />
      <Bar width="134px" />
      <Bar width="134px" />
      <Bar width="184px" />
    </InputLine>

    <List>
      <BarLine />
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
      <Item>
        <Bar width="100%" />
      </Item>
    </List>
  </Wrapper>
);

const animation = keyframes`
  from {
    background-color: hsl(200, 20%, 80%);
  }

  to {
    background-color: hsl(200, 20%, 95%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${breakpoints.tablet} {
    padding-top: 40px 30px;
  }

  @media ${breakpoints.desktop} {
    padding: 10px 16px;
  }
`;

const Animation = styled.div`
  animation: ${animation} 1s linear infinite alternate;
`;

const BarLine = styled(Animation)`
  border-radius: 5px;
  width: 100%;
  height: 32px;

  @media ${breakpoints.desktop} {
    width: 250px;
  }
`;

const Bar = styled(Animation)`
  width: ${(p) => p.width};
  border-radius: 5px;
  height: 270px;
  margin-right: 16px;

  @media ${breakpoints.desktop} {
    height: 50px;
  }
`;

const InputLine = styled.div`
  display: none;
  width: 100%;

  @media ${breakpoints.desktop} {
    display: flex;
  }
`;

const List = styled.ul`
  margin-top: 0;

  @media ${breakpoints.desktop} {
    margin-top: 80px;
  }
`;

const Item = styled.li`
  margin-top: 8px;
`;

export default SkeletonHomePage;
