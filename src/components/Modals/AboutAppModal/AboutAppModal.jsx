import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useLocalStorage from 'hooks/useLocalStorage';

import Popup from 'hoc/Popup';

import InfoBlockAbout from 'pages/RegisterPage/InfoBlockAbout';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const AboutAppModal = () => {
  const navigate = useNavigate();

  const [visited, setVisited] = useLocalStorage('visited', false);
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (visited) setOpen(false);
  }, [visited]);

  const handleLink = async (link) => {
    await setVisited(true);
    setOpen(!isOpen);
    navigate(link);
  };

  if (!isOpen && visited) return null;

  return (
    <Popup>
      <InfoBlockAbout />

      <ContainerButtons>
        <ContainerButton>
          <CommonButton
            type="button"
            title="Login"
            variant="transparent"
            onClick={() => handleLink('/login')}
          />
        </ContainerButton>
        <ContainerButton>
          <CommonButton
            type="button"
            title="Register"
            variant="accent"
            onClick={() => handleLink('/register')}
          />
        </ContainerButton>
      </ContainerButtons>
    </Popup>
  );
};

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
  margin: 40px auto 20px;
`;

const ContainerButton = styled.div`
  width: 130px;
`;

export default AboutAppModal;
