import { FcGoogle } from 'react-icons/fc';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const GoogleButton = ({onClick}) => {
  return <Button><FcGoogle style={{ width: 18, height: 18, marginRight: 17 }}/>Google</Button>;
};

const Button = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  margin: 0 auto;
  padding: 11px 14px;
  font-family: Roboto;
  font-weight: 700;
  color: ${(p) => p.theme.colors.btnText};
  background-color: ${(p) => p.theme.colors.bgLight};
  box-shadow: ${(p) => p.theme.shadows.button};
  cursor: pointer;
`;

GoogleButton.propTypes = {
  onClick: PropTypes.func
};

export default GoogleButton;
