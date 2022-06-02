import { useState } from 'react';
import styled from 'styled-components';
import FormInput from 'components/UI-kit/inputs/FormInput';
import CommonInput from 'components/UI-kit/inputs/CommonInput';
import { breakpoints } from 'constants/breakpoints';

const App = () => {
  const [values, setValue] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    hobby: '',
    mood: '',
  });

  const handleInput = ({ value, name }) =>
    setValue((state) => ({ ...state, [name]: value }));

  return (
    <Wrapper>
      <Heading>Hello app!</Heading>
      <Description>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam a magnam
        laudantium nisi, soluta eos optio. Ipsa suscipit culpa adipisci
        cupiditate enim. Veniam asperiores et provident. Quaerat modi veniam
        nemo.
      </Description>

      <form>
        <List>
          <Item>
            <FormInput
              title="Name"
              id="name"
              placeholder="Your name"
              required
              disabled
              value={values.name}
              onChange={handleInput}
            />
          </Item>
          <Item>
            <FormInput
              title="Email"
              id="email"
              autoComplete="username"
              placeholder="your@email.com"
              required
              value={values.email}
              onChange={handleInput}
            />
          </Item>
          <Item>
            <FormInput
              title="Password"
              id="password"
              autoComplete="password"
              placeholder="*******"
              required
              type="password"
              value={values.password}
              onChange={handleInput}
              error="passwords is not match"
            />
          </Item>
          <Item>
            <FormInput
              title="Confirm password"
              id="confirmpassword"
              autoComplete="password"
              placeholder="*******"
              required
              type="password"
              value={values.confirmpassword}
              onChange={handleInput}
            />
          </Item>
        </List>
      </form>

      <form>
        <List>
          <Item>
            <CommonInput
              title="Hobby"
              id="hobby"
              placeholder="Descripe your hobby"
              value={values.hobby}
              onChange={handleInput}
            />
          </Item>
          <Item>
            <CommonInput
              title="Mood"
              id="mood"
              placeholder="What is your mood today?"
              disabled
              value={values.mood}
              onChange={handleInput}
            />
          </Item>
        </List>
      </form>
    </Wrapper>
  );
};

const List = styled.ul`
  width: 300px;
  padding: 20px;
  background-color: #fff;
`;

const Item = styled.li`
  margin-top: 20px;
`;

const Wrapper = styled.section`
  background-color: ${(p) => p.theme.colors.bgPrimary};
  max-width: 320px;

  @media ${breakpoints.tablet} {
    max-width: 768px;
  }

  @media ${breakpoints.desktop} {
    max-width: 1024px;
  }
`;

const Heading = styled.h1`
  color: ${(p) => p.theme.colors.accent};
`;

const Description = styled.p`
  color: ${(p) => p.theme.colors.secondary};
`;

export default App;
