import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.header`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    padding: 15px 40px;
    max-width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    transition: 0.4s;
    background-color: ${props => (props.$isColoring ? "#fff" : "transparent")};
    color: ${props => (props.$isColoring || props.$isOpen ? "#252525" : "#fff")};

    .hamburger-menu {
        position: relative;
        z-index: 1000;
        right: 0;
        display: none;
        width: 50px;
        height: 7px;
        background-color: ${props => (props.$isColoring || props.$isOpen ? "#252525" : "#fff")};
        transition: 0.4s;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 7px;
            background-color: ${props => (props.$isColoring || props.$isOpen ? "#252525" : "#fff")};
            transition: 0.6s;
        }

        &::before {
            top: -15px;
        }

        &::after {
            top: 15px;
        }

        &.open {
            transform: rotate(45deg);

            &::before {
                top: 0;
                transform: rotate(90deg);
            }

            &::after {
                top: 0;
                transform: rotate(180deg);
            }
        }

        @media (max-width: 768px) {
            display: block;
        }

        @media (max-width: 480px) {
            width: 30px;
            height: 4px;

            &::before,
            &::after {
                height: 4px;
            }

            &::before {
                top: -12px;
            }

            &::after {
                top: 12px;
            }
        }
    }
`;

export const Logo = styled.div`
    cursor: pointer;
    svg {
        width: 100px;
        height: 100px;
        transition: 0.3s;

        path {
            fill: ${props => (props.$isColoring ? "#252525" : "#fff")};
        }
    }

    @media (max-width: 1250px) {
        svg {
            width: 80px;
            height: 80px;
        }
    }

    @media (max-width: 940px) {
        svg {
            width: 70px;
            height: 70px;
        }
    }

    @media (max-width: 768px) {
        svg {
            width: 60px;
            height: 60px;
        }
    }

    @media (max-width: 480px) {
        svg {
            width: 50px;
            height: 50px;
        }
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    gap: 100px;

    li {
        font-size: 28px;
        transition: 0.4s;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }

    @media (max-width: 1250px) {
        gap: 75px;

        li {
            font-size: 24px;
        }
    }

    @media (max-width: 964px) {
        gap: 45px;

        li {
            font-size: 20px;
        }
    }

    @media (max-width: 768px) {
        display: ${props => (props.$isOpen ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 0px;
        width: 60%;
        height: 100%;
        padding: 25px 0px;
        position: fixed;
        top: -16px;
        bottom: 0;
        right: 0;
        z-index: 999;

        background-color: ${props => (props.$isOpen ? "#fff" : "transparent")};
        animation: ${props => (props.$isOpen ? fadeIn : "none")} 0.8s ease-in-out;

        li {
            font-size: 20px;
        }
    }

    @media (max-width: 480px) {
        padding: 35px 0px;
        width: 70%;
    }

    @media (max-width: 360px) {
        width: 100%;
    }
`;
