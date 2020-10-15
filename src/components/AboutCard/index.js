import React from "react";
import {Blockquote, GradientBackImg, Paragraph} from '../Index'
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
              <Paragraph>
              {props.paragraph}
              </Paragraph>
            </DescriptionContainer>

          </CardContainer>
        </Cont>
    </AboutCardContainer>
    </>
  );

};

export default AboutCard;