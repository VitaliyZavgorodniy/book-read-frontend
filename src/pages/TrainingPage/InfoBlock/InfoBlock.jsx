import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { ReactComponent as Library } from 'assets/icons/library.svg';
import { ReactComponent as Flag } from 'assets/icons/flag.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const InfoBlock = () => (
  <Wrapper>
    <StepsList>
      <Step>
        <StepNumber>Step 1.</StepNumber>
        <Title>
          <Library />
          Add one ore more book for training
        </Title>
        <Text>
          <Arrow />
          Use search field to find books from your library
        </Text>
      </Step>
      <Step>
        <StepNumber>Step 2.</StepNumber>
        <Title>
          <Flag />
          Set end date and time of your training
        </Title>
        <Text>
          <Arrow />
          Use date and time picker for choose when your training will end
        </Text>
        <Text>
          <Arrow />
          End date can't be more than 31 day and less than 1 day
        </Text>
      </Step>
    </StepsList>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 42px 20px;
  margin: 0 auto;
  font-weight: 600;
  background: ${(p) => p.theme.colors.bgSecondary};
  box-shadow: ${(p) => p.theme.shadows.block};
  @media ${breakpoints.tablet} {
    width: 608px;
    padding: 40px;
  }
`;

const StepsList = styled.ul`
  width: 100%;
`;

const Step = styled.li`
  &:not(:last-child) {
    margin-bottom: 21px;
    @media ${breakpoints.tablet} {
      margin-bottom: 24px;
    }
  }
`;

const StepNumber = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 22px;
  color: ${(p) => p.theme.colors.primary};
  @media ${breakpoints.tablet} {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary};
  & svg {
    margin-right: 12px;
  }
`;

const Text = styled.p`
  position: relative;
  margin-top: 8px;
  padding-left: 52px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${(p) => p.theme.colors.tertiary};
  & svg {
    position: absolute;
    left: 34px;
  }
`;

export default InfoBlock;
