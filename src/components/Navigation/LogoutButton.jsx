import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { breakpoints } from 'constants/breakpoints';

import CommonButton from 'components/UI-kit/buttons/CommonButton';

import Modal from 'hoc/Modal';

import styled from 'styled-components';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Modal onClose={() => setOpen(false)}>
          <ModalLogout>
            <ModalText>
              The changes you made will be lost if you navigate away from this
              application
            </ModalText>

            <ModalButtons>
              <ModalButtonWrapper>
                <CommonButton title="Cancel" onClick={() => setOpen(false)} />
              </ModalButtonWrapper>

              <ModalButtonWrapper>
                <CommonButton
                  variant="accent"
                  title="Leave"
                  onClick={() => dispatch(authOperations.logout())}
                />
              </ModalButtonWrapper>
            </ModalButtons>
          </ModalLogout>
        </Modal>
      ) : null}

      <Logout type="button" onClick={() => setOpen(true)}>
        Logout
      </Logout>
    </>
  );
};

const Logout = styled.button`
  margin-left: 14px;
  margin-right: 0;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 300;
  font-size: 14px;
  line-height: 1.21;
  text-decoration-line: underline;
  background-color: transparent;
  transition: ${(p) => p.theme.animations.primary} color;

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.accent};
  }

  @media ${breakpoints.tablet} {
    margin-left: 8px;
  }
`;

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
