import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Popup from 'hoc/Popup';

import InfoBlockAbout from 'pages/RegisterPage/InfoBlockAbout';
import CommonButton from 'components/UI-kit/buttons/CommonButton';

const AboutAppModal = ({ isNewUser, setNewUser }) => {
  const navigate = useNavigate();

  const handleLink = (link) => {
    setNewUser();
    navigate(link);
  };

  if (isNewUser) return null;

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
