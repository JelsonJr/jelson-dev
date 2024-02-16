import { Contacts, Links, Container } from "./styles";
import thanks from "mocks/thanks.json";

const Contact = () => {
    return (
        <Contacts>
            {thanks.map(friendToThank => {
                const { name, github, linkdin, image, alt } = friendToThank;
                return (
                    <Container key={name}>
                        <img src={image} alt={alt} />
                        <h3>{name}</h3>
                        <Links>
                            <a href={linkdin} target="_blank" rel="noreferrer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <g clipPath="url(#clip0_102_47)">
                                            <path
                                                d="M7.27547 18.75H4.01016V8.23478H7.27547V18.75ZM5.64105 6.8004C4.59691 6.8004 3.75 5.93556 3.75 4.89142C3.75 4.38988 3.94924 3.90888 4.30388 3.55424C4.65852 3.1996 5.13952 3.00037 5.64105 3.00037C6.14259 3.00037 6.62359 3.1996 6.97823 3.55424C7.33287 3.90888 7.53211 4.38988 7.53211 4.89142C7.53211 5.93556 6.68484 6.8004 5.64105 6.8004ZM19.4965 18.75H16.2382V13.6313C16.2382 12.4113 16.2136 10.8469 14.5405 10.8469C12.8428 10.8469 12.5827 12.1723 12.5827 13.5434V18.75H9.32086V8.23478H12.4526V9.66915H12.4983C12.9342 8.84298 13.9991 7.97111 15.5878 7.97111C18.8925 7.97111 19.5 10.1473 19.5 12.9738V18.75H19.4965Z"
                                                fill="none"
                                            />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_102_47">
                                            <rect width="15.75" height="18" fill="white" transform="translate(3.75 3)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href={github} target="_blank" rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-github"
                                >
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        </Links>
                    </Container>
                );
            })}
        </Contacts>
    );
};

export default Contact;
