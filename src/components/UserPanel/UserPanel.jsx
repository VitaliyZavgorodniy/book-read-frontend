import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const DEFAULT_USER_LETTER = 'U';
const DEFAULT_USER_NAME = 'User';

const UserPanel = ({ name, avatar }) => {
  const renderAvatar = () => {
    if (avatar) return <Avatar src={avatar} alt={name} />;
    if (name) return name[0];
    return DEFAULT_USER_LETTER;
  };

  return (
    <Wrapper>
      <AvatarWrapper>{renderAvatar()}</AvatarWrapper>
      <NamePlate>{name?.length ? name : DEFAULT_USER_NAME}</NamePlate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 14px;

  @media ${breakpoints.tablet} {
    order: -1;
    margin-left: 0;
  }
`;

const AvatarWrapper = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  background-color: ${(p) => p.theme.colors.bgLight};
  color: ${(p) => p.theme.colors.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  border-radius: 50%;
  text-transform: uppercase;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const NamePlate = styled.p`
  display: none;
  color: ${(p) => p.theme.colors.primary};
  margin-left: 12px;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;

  @media ${breakpoints.tablet} {
    display: flex;
  }
`;

UserPanel.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default UserPanel;
