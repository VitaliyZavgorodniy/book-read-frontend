import styled from 'styled-components';

const BlockHeading = ({ title }) => <Wrapper>{title}</Wrapper>;

const Wrapper = styled.h2`
  width: 100%;
  padding: 18px;
  color: ${(p) => p.theme.colors.bgSecondary};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background-color: ${(p) => p.theme.colors.bgTertiary};
`;

export default BlockHeading;
