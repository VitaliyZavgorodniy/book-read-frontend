import styled from 'styled-components';

import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

const Popup = ({ children, onClose }) => (
  <Wrapper>
    <ButtonClose onClick={onClose}>
      <Icon />
    </ButtonClose>

    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 68px 20px 0;
  background-color: ${(p) => p.theme.colors.bgPrimary};
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 24px;
  left: 20px;
  background-color: transparent;
`;

const Icon = styled(HiOutlineArrowNarrowLeft)`
  color: ${(p) => p.theme.colors.accent};
  font-size: 24px;
`;

export default Popup;
