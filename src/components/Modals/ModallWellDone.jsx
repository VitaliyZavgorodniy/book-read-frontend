import React from 'react';
import styled from 'styled-components';
import CommonButton from 'components/UI-kit/buttons/CommonButton';
import { BiLike } from 'react-icons/bi';
import Modal from 'hoc/Modal';

const ModallWellDone = ({ onClose }) => {
  return (
    <Modal>
      <Wrapper>
        <ItemIcon>
          <Icon />
        </ItemIcon>

        <ItemText>
          <Text>Congratulations!</Text>
          <Text>Another book read.</Text>
        </ItemText>

        <ItemButton>
          <CommonButton
            type="submit"
            title="Done"
            variant="accent"
            onClick={onClose}
          />
        </ItemButton>
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.form`
  width: 394px;
  height: 256px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
`;
const ItemIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 42px;
`;
const Icon = styled(BiLike)`
  width: 50px;
  height: 45px;
  color: ${(p) => p.theme.colors.accent};
`;
const ItemText = styled.div`
  width: 227px;
  background-color: ${(p) => p.theme.colors.bgSecondary};
  margin: 20px auto 24px auto;
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
const ItemButton = styled.p`
  display: flex;
  justify-content: center;
  width: 130px;
  align-items: center;
  margin: 0 auto;
`;

export default ModallWellDone;
