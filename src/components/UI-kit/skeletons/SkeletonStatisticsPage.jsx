import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const SkeletonStatisticsPage = () => (
  <Wrapper>
    <ContainerLeft>
      <ContainerCounters>
        <ContainerCounter />
        <ContainerCounter />
      </ContainerCounters>

      <List>
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

      <ContainerStatistics />
    </ContainerLeft>

    <ContainerRight />
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

const Animation = styled.div`
  animation: ${animation} 1s linear infinite alternate;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
  }
`;

const ContainerLeft = styled.div`
  width: 280px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    width: 928px;
  }
`;

const ContainerRight = styled(Animation)`
  margin: 0 auto;
  width: 288px;
  height: 329px;
`;

const ContainerCounters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 194px;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    height: auto;
    padding: 0 46px;
  }

  @media ${breakpoints.desktop} {
    padding: 0 137px;
  }
`;

const ContainerCounter = styled(Animation)`
  width: 290px;
  height: 80px;
  margin-top: 30px;

  &:first-child {
    margin-top: 0;
  }

  @media ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const ContainerStatistics = styled(Animation)`
  width: 290px;
  height: 340px;
  margin-top: 40px;

  @media ${breakpoints.desktop} {
    width: 928px;
    height: 340px;
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

const List = styled.ul`
  width: 290px;
  margin-top: 40px;

  @media ${breakpoints.desktop} {
    width: 928px;
  }
`;

const Item = styled.li`
  margin-top: 8px;
`;

export default SkeletonStatisticsPage;
