import React from 'react';
import styled from 'styled-components';
import { MdOutlineThumbUpAlt } from 'react-icons/md';
import { CommonButton } from './rating';

const NewTrainingModal = ({ onClose }) => {
  const startNewTraining = () => onClose();
  return (
    <Wrapper>
      <ThumbsUpIcon color="#A6ABB9" />
      <Text>
        Well done!
        <br />
        but you need to be a little bit faster. <br />
        You can do it)
      </Text>
      <ButtonList>
        <ButtonListItem>
          <CommonButton
            type="button"
            title="New training"
            variant="accent"
            onClick={startNewTraining}
          />
        </ButtonListItem>
        <ButtonListItem>
          <CommonButton type="button" title="Back" onClick={onClose} />
        </ButtonListItem>
      </ButtonList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
align-items: center;
width 400px;
background-color: white`;

const ThumbsUpIcon = styled(MdOutlineThumbUpAlt)`
  font-size: 50px;
  margin: 40px 172px 20px 172px;
`;
const Text = styled.h2`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
`;

const ButtonList = styled.ul`
  list-style: none;
  display: flex;
  margin: 20px 30px 40px 30px;
`;
const ButtonListItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export default NewTrainingModal;
