import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

import { MdOutlineThumbUp } from 'react-icons/md';

import CommonButton from 'components/UI-kit/buttons/CommonButton';
import Modal from 'hoc/Modal';

const TrainingCompleteModal = ({ isOpen, toggleModal }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <Modal onClose={toggleModal}>
      <ModalLogout>
        <Icon />

        <ModalText>Well done! Your training is completed</ModalText>

        <ModalButtons>
          <ModalButtonWrapper>
            <CommonButton
              title="New training"
              variant="accent"
              onClick={() => navigate('/training')}
            />
          </ModalButtonWrapper>

          <ModalButtonWrapper>
            <CommonButton title="Back" onClick={toggleModal} />
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
  flex-direction: column;
  margin-top: 20px;

  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

const ModalButtonWrapper = styled.div`
  width: 154px;
  margin-right: 0;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${breakpoints.tablet} {
    width: 130px;
    margin-right: 30px;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Icon = styled(MdOutlineThumbUp)`
  color: ${(p) => p.theme.colors.accent};
  font-size: 54px;
  margin-bottom: 14px;
`;

export default TrainingCompleteModal;
