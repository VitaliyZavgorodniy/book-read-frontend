// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';

import styled from 'styled-components';

import { breakpoints } from 'constants/breakpoints';

export const LogoutButton = () => {
  // const dispatch = useDispatch();
  return (
    <Logout
      type="button"
      // onClick={() => dispatch(authOperations.logout())}
    >
      Logout
    </Logout>
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
  cursor: pointer;

  @media ${breakpoints.tablet} {
    margin-left: 8px;
  }
`;
