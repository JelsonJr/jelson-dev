import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    height: 130px;

    .hamburger-menu {
        position: relative;
        display: block;
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

        &:hover::before,
        &:hover::after {
            background-color: #ddd;
        }
    }
`;

export const Logo = styled.div`
    svg {
        width: 70px;
        height: 70px;

        path {
            fill: #fff;
        }
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    list-style: none;

    li {
        text-decoration: none;
        font-size: 28px;
        cursor: pointer;
        position: relative;
        transition: 0.3s;

        &:hover {
            opacity: 0.5;
        }

        @media (max-width: 1250px) {
            font-size: 24px;
            color: #454555;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;
