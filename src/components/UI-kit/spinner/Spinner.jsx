import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => (
  <Wrapper>
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={5}
      color="#FF6B08"
      secondaryColor="#6D7A8D"
    />
  </Wrapper>
);

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Spinner;
