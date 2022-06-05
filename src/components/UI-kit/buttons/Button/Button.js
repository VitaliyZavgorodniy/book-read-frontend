import styled from 'styled-components';
import { breakpoints } from 'constants/breakpoints';

const Button = ({ type, text, isActive, onClick = null }) => {
    return (
        <Buttontext onClick={onClick}>
            {text}
        </Buttontext>
    );

};

const Buttontext = styled.button`
width: 280px;
height: 60px;
background: #FF6B08;
color: #fff;
 &:hover {
    cursor: pointer;
    background-color: #b2b2b2;
  }
    @media ${breakpoints.tablet} {
    width: 320px;
    height: 60px;
  }
    @media ${breakpoints.desktop} {
    width: 320px;
    height: 60px;
  }

`;

export default Button;

//<Button type="submit" text = "sign Up" isActive={true} />