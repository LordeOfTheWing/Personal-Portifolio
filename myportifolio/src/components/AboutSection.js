import React from 'react';
import home1 from '../img/home1.png';
//Styled components
import styled from 'styled-components';


const AboutSection = () => {
    return(
        <About>
            <Description>
                    <div className="title">
                        <Hide>
                            <h2>I Work to make</h2>
                        </Hide>
                                <Hide>
                            <h2>
                                my <span>dreams</span> come
                            </h2>
                        </Hide>
                        <Hide>
                            <h2>true.</h2>
                        </Hide>
                        </div>
                        <p>Contact me for any designing or coding jobs that you may have.
                        I am a professional with amazing skills.
                        </p>
                        <button>Contact Me</button>
            </Description>
                            <image>
                                <img src={home1} alt="Picture of me."/>
                            </image>        
        </About>
    );
};

//Styled Components
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
const Description = styled.div`
    flex:1;
    padding-right:5rem;
    h2{
        font-weight: lighter;
    }

`;
const Image = styled.div`
    flex:1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;
export default AboutSection;