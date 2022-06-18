import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoLink = () => <Container to="/">BR</Container>;

const Container = styled(Link)`
  color: ${(p) => p.theme.colors.primary};
  font-family: ${(p) => p.theme.font.familyLogo};
  font-size: 20px;
  line-height: 27px;
`;

export default LogoLink;
