import styled from 'styled-components';

const App = () => (
  <Wrapper>
    <Heading>Hello app!</Heading>
    <Description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam a magnam
      laudantium nisi, soluta eos optio. Ipsa suscipit culpa adipisci cupiditate
      enim. Veniam asperiores et provident. Quaerat modi veniam nemo.
    </Description>
  </Wrapper>
);

const Wrapper = styled.section`
  background-color: ${(p) => p.theme.colors.bgPrimary};
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.accent};
`;

const Description = styled.p`
  color: ${(p) => p.theme.colors.secondary};
`;

export default App;
