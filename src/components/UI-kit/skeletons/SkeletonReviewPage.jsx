import styled, { keyframes } from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const SkeletonReviewPage = () => (
  <Wrapper>
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
  padding: 0 15px;
`;

const Animation = styled.div`
  animation: ${animation} 1s linear infinite alternate;
  border-radius: 5px;
`;

const Bar = styled(Animation)`
  width: ${(p) => p.width};
  height: 420px;
`;

const List = styled.ul`
  margin-top: 0;

  @media ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

const Item = styled.li`
  margin-top: 8px;
`;

export default SkeletonReviewPage;
