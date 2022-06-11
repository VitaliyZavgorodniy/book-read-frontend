import * as Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Wrapper>
      <Loader
        type="Circles"
        color="#ff6b08"
        height={100}
        width={100}
        timeout={3000}
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
