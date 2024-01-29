import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    width: 280px;
    border-radius: 16px;
    flex: none;
`;

const Image = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Info = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span {
        display: block;
        text-align: center;
        color: #1e1e1e;
        padding: 5px;
        border-radius: 10px;
    }
`;

const ProjectName = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px 0;
`;

const ProjectDescription = styled.span`
    font-size: 0.8rem;
    flex-grow: 1;
`;

const Link = styled.a`
    display: block;
    text-align: center;
    color: #1e1e1e;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.8rem;
    margin-top: 10px;
    text-decoration: none;
    background-color: #feda4a;
`;

const Item = ({ image, alt, name, description, link }) => (
    <Container>
        <Image>
            <img src={image} alt={alt} />
        </Image>
        <Info>
            <ProjectName>{name}</ProjectName>
            <ProjectDescription>{description}</ProjectDescription>
            <Link target="blank" href={link}>
                visitar código fonte
            </Link>
        </Info>
    </Container>
);

Item.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Item;
