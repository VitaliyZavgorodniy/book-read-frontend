import styled from "styled-components";
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs"

const ThemeToggle = ({theme,  toggleTheme }) => {
    const icon = theme === "light" ? <BsMoonStarsFill size={25} /> : <BsSunFill size={30} />;

    return (
                <Toggle onClick={toggleTheme}>
                    {icon}
                </Toggle>
    );
};

const Toggle = styled.button`
    position: fixed;
    top: 70px;
    right: 15px;
    z-index: 99;
    cursor: pointer;
    height: 40px;
    width: 40px;   
    border-radius: 50%;
    border: none;
    background-color: ${p => p.theme.colors.heading};
    color: ${props => props.theme.colors.bgLight};
    transition: ${(p) => p.theme.animations.primary} background-color;
    &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.colors.text};

  }
    &:focus {
        outline: none;
    }
    transition: all 1s ease;
`;

export default ThemeToggle;