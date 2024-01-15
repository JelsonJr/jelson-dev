import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: transparent;
    color: #f7f7f7;
    height: 130px;

    .hamburger-menu {
        position: relative;
        display: none;
        width: 50px;
        height: 7px;
        background-color: white;
        cursor: pointer;
        transition: 0.4s;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 7px;
            background-color: white;
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

        path {
            fill: #fff;
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
    gap: 100px;
    list-style: none;
    transition: 0.5s;

    li {
        text-decoration: none;
        font-size: 28px;
        cursor: pointer;
        position: relative;
        transition: 0.3s;

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
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-top: 450px;
        text-align: center;

        li {
            text-align: center;
            font-size: 16px;
        }
    }
`;
