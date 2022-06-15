import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { ReactComponent as Library } from 'assets/icons/library.svg';
import { ReactComponent as Flag } from 'assets/icons/flag.svg';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

const InfoBlockIntro = () => (
  <StepsList>
    <Step>
      <StepNumber>Step 1.</StepNumber>
      <Title>
        <Library />
        Create your own library
      </Title>
      <Text>
        <Arrow />
        Add there books which you are going to read.
      </Text>
    </Step>
    <Step>
      <StepNumber>Step 2.</StepNumber>
      <Title>
        <Flag />
        Create your first training
      </Title>
      <Text>
        <Arrow />
        Set a goal, choose period, start training.
      </Text>
    </Step>
  </StepsList>
);

const StepsList = styled.ul`
  margin-bottom: 40px;
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
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary};
  & svg {
    margin-right: 12px;
  }
`;

const Text = styled.p`
  position: relative;
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

export default InfoBlockIntro;
