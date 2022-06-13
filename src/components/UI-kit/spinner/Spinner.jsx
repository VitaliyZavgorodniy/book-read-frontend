import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Wrapper>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="red"
        secondaryColor="yellow"
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;
export default Spinner;
