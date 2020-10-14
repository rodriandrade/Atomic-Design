import React from "react";
import {Blockquote, GradientBackImg, Container} from '../Index'
import {Description, DescriptionContainer, Title, Subtitle, CardContainer, Cont, AboutCardContainer} from './styled'

const AboutCard = props => {

  return (
    <>
     <AboutCardContainer>
        <Cont>
          <GradientBackImg src="/test.png" />
          <CardContainer>

            <Title>{props.name}</Title>
            <Subtitle>Frontend Developer</Subtitle>
            <Blockquote>{props.quote}</Blockquote>

            <DescriptionContainer>
              <Description>
              “Far away I can hear the sound of someone out there singin', I'm speeding through the forest, strange echoes of Belarus, where presidents pin badges on disconnected youth. What would you be dreaming of?”
              </Description>
            </DescriptionContainer>

          </CardContainer>
        </Cont>
    </AboutCardContainer>
    </>
  );

};

export default AboutCard;