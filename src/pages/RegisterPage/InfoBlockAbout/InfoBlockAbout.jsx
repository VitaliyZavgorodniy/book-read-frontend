import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const InfoBlockAbout = () => (
  <Wrapper>
    <Title>Books Reading</Title>

    <Block>
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
    </Block>
    <BlockLast>
      <Label>You may also</Label>

      <List>
        <Item>
          <Arrow />
          Pose your own independent point of view
        </Item>
        <Item>
          <Arrow />
          Improve your professional skills according to new knowledge
        </Item>
        <Item>
          <Arrow />
          Become an interesting interlocutor
        </Item>
      </List>
    </BlockLast>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  padding-bottom: 32px;
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.font.familyLogo};
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;
  text-align: center;

  @media ${breakpoints.tablet} {
    padding-bottom: 48px;
  }
`;
const Block = styled.div`
  width: 275px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  @media ${breakpoints.tablet} {
    width: 450px;
    margin-bottom: 32px;
  }
`;
const BlockLast = styled(Block)`
  margin-bottom: 0;
`;
const Label = styled.h2`
  margin-bottom: 14px;
  color: ${(div) => div.theme.colors.primary};
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
`;
const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: baseline;
  position: relative;
  margin-top: 12px;
  padding-left: 16px;
  color: ${(p) => p.theme.colors.tertiary};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  &:first-child {
    margin-top: 0;
  }
`;

const Arrow = styled(MdOutlineKeyboardArrowRight)`
  position: absolute;
  top: 25%;
  left: -4px;
  transform: translateY(-45%);
  color: ${(p) => p.theme.colors.accent};
  font-size: 16px;

  @media ${breakpoints.tablet} {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default InfoBlockAbout;
