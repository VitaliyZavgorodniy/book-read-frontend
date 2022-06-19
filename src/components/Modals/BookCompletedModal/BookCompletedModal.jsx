import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { MdOutlineThumbUp } from 'react-icons/md';

import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Modal from 'hoc/Modal';

const BookCompletedModal = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={toggleModal}>
      <ModalLogout>
        <Icon />

        <ModalText>Congratulations! Another book read</ModalText>

        <ModalButtons>
          <ModalButtonWrapper>
            <CommonButton title="Done" variant="accent" onClick={toggleModal} />
          </ModalButtonWrapper>
        </ModalButtons>
      </ModalLogout>
    </Modal>
  );
};

const ModalLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 48px 22px;
  background-color: ${(p) => p.theme.colors.bgSecondary};

  @media ${breakpoints.tablet} {
    width: 394px;
    padding: 48px 33px;
  }
`;

const ModalText = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

const ModalButtons = styled.div`
  display: flex;
  margin-top: 14px;

  @media ${breakpoints.tablet} {
    margin-top: 24px;
  }
`;

const ModalButtonWrapper = styled.div`
  width: 97px;
  margin-right: 16px;

  @media ${breakpoints.tablet} {
    width: 130px;
    margin-right: 30px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Icon = styled(MdOutlineThumbUp)`
  color: ${(p) => p.theme.colors.textLight};
  font-size: 54px;
  margin-bottom: 14px;
`;

export default BookCompletedModal;
