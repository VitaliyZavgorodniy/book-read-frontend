import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const InfoBlockAbout = () => (
  <Wrapper>
    <Title>Books Reading</Title>

    <Label>Will help you to</Label>
    <List>
      <Item>
        <Arrow />
        Create your goal faster and proceed to read
      </Item>
      <Item>
        <Arrow />
        Divide process proportionally for each day
      </Item>
      <Item>
        <Arrow />
        Track your success
      </Item>
    </List>

    <Label>Will help you to</Label>
    <List>
      <Item>
        <Arrow />
        Create your goal faster and proceed to read
      </Item>
      <Item>
        <Arrow />
        Divide process proportionally for each day
      </Item>
      <Item>
        <Arrow />
        Track your success
      </Item>
    </List>
  </Wrapper>
);

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

const Title = styled.p`
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.font.familyLogo};
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
`;

const Label = styled.div`
  margin-bottom: 14px;
  color: ${(div) => div.theme.colors.primary};
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;
`;

const List = styled.ul`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Item = styled.li`
  position: relative;
  margin-top: 12px;
  padding-left: 16px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  &:first-child {
    margin-top: 0;
  }
`;

const Arrow = styled(MdOutlineKeyboardArrowRight)`
  position: absolute;
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
  color: ${(p) => p.theme.colors.accent};
  font-size: 16px;
`;

export default InfoBlockAbout;
