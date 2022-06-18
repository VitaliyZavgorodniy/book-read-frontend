import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Modal from 'hoc/Modal';

const LogoutModal = ({ isOpen, toggleModal, onLogout }) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={toggleModal}>
      <ModalLogout>
        <ModalText>
          The changes you made will be lost if you navigate away from this
          application
        </ModalText>

        <ModalButtons>
          <ModalButtonWrapper>
            <CommonButton title="Cancel" onClick={toggleModal} />
          </ModalButtonWrapper>

          <ModalButtonWrapper>
            <CommonButton variant="accent" title="Leave" onClick={onLogout} />
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
  margin-top: 20px;
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

export default LogoutModal;
