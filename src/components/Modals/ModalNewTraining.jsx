import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { BiLike } from 'react-icons/bi';

import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Modal from 'hoc/Modal';

const NewTrainingModal = ({ onClose }) => {
  return (
    <Modal>
      <Wrapper>
        <ItemIcon>
          <Icon />
        </ItemIcon>
        <ItemText>
          <Text>Well done!</Text>
          <Text> but you need to be a little bit faster.</Text>
          <Text> You can do it &#41;</Text>
        </ItemText>

        <ButtonList>
          <ButtonListItem>
            <CommonButton
              type="button"
              title="New training"
              variant="accent"
              onClick={() => {}}
            />
          </ButtonListItem>
          <ButtonListItem>
            <CommonButton type="button" title="Back" onClick={onClose} />
          </ButtonListItem>
        </ButtonList>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.div`
  align-items: center;
  width: 280px;
  height: 358px;
  background-color: white;
  @media ${breakpoints.tablet} {
    width: 394px;
    height: 286px;
  }
`;
const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;
const Icon = styled(BiLike)`
  width: 50px;
  height: 45px;
  color: ${(p) => p.theme.colors.textLight};
`;
const ItemText = styled.div`
  width: 160px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  margin: 14px auto 14px auto;
  @media ${breakpoints.tablet} {
    width: 289px;
    margin-bottom: 24px;
  }
`;
const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 152px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 336px;
    margin: 0 29px;
  }
`;
const ButtonListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  @media ${breakpoints.tablet} {
    width: 152px;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export default NewTrainingModal;
