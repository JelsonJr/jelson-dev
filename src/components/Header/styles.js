import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    height: 130px;
    background-color: ${props => props.$isColoring ? '#fff' : 'transparent'};
    color: ${props => props.$isColoring ? '#252525' : '#f7f7f7'}; 
   
    .hamburger-menu {
        position: relative;
        display: none;
        width: 50px;
        height: 7px;
        background-color: ${props => props.$isColoring ? '#252525' : '#fff'};
        cursor: pointer;
        transition: 0.4s;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 7px;
            background-color: ${props => props.$isColoring ? '#252525' : '#fff'};
            transition: 0.4s;
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
            display: block;
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
            fill: ${props => props.$isColoring ? '#252525' : '#f7f7f7'}; 
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
    justify-content: space-between;
    align-items: center;
    list-style: none;
    gap: 100px;
    
    li {
        text-decoration: none;
        font-size: 28px;
        cursor: pointer;
        position: relative;

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

    @media (max-width: 940px) {
        gap: 45px;

        li {
            font-size: 20px;
        }
    }

   @media (max-width: 768px) {
        display: ${props => props.$isOpen ? 'flex' : 'none'};
        flex-direction: column;
        gap: 30px;
        align-items: stretch;
        position: absolute;
        top: 80%;
        left: 0;
        width: 100%;
        background-color: ${props => props.$isOpen ? '#fff' : 'transparent'};
        animation: ${props => props.$isOpen ? fadeIn : 'none'} 0.5s ease-in-out;

        li {
            font-size: 20px;
            opacity: ${props => props.$isOpen ? 1 : 0};
            transition: opacity 0.5s ease-in-out;
        }
    }

   @media (max-width: 768px) {
        display: ${props => props.$isOpen ? 'flex' : 'none'};
        flex-direction: column;
        gap: 30px;
        align-items: stretch;
        position: absolute;
        top: 80%;
        left: 0;
        width: 100%;
        background-color: ${props => props.$isOpen ? '#fff' : 'transparent'};
        animation: ${props => props.$isOpen ? fadeIn : 'none'} 0.5s ease-in-out;

        li {
            font-size: 16px;
            opacity: ${props => props.$isOpen ? 1 : 0};
            transition: opacity 0.5s ease-in-out;
        }
    }
`;
