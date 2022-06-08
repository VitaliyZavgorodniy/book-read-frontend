import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

const { REACT_APP_BACKEND_LINK } = process.env;

const GoogleButton = () => (
  <Button href={`${REACT_APP_BACKEND_LINK}/login/google`}>
    <Icon />
    Google
  </Button>
);

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  padding: 11px 14px;
  background-color: ${(p) => p.theme.colors.bgLight};
  color: ${(p) => p.theme.colors.btnText};
  font-family: ${(p) => p.theme.font.familySecondary};
  font-weight: 700;
  font-size: 16px;
  line-height: 38px;
  box-shadow: ${(p) => p.theme.shadows.button};
  transition: background-color ${(p) => p.theme.animations.primary};

  &:hover {
    cursor: pointer;
    color: ${(p) => p.theme.colors.contrast};
    background-color: ${(p) => p.theme.colors.accent};
  }
`;

const Icon = styled(FcGoogle)`
  width: 18px;
  height: 18px;
  margin-right: 17px;
`;

GoogleButton.propTypes = {
  onClick: PropTypes.func,
};

export default GoogleButton;
