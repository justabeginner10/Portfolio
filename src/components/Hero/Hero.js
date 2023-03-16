import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, It's Aditya <br/>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A passionate web developer with a fad for smooth and minimal UI.
      </SectionText>
      <Button onClick={()=> window.location = 'https://drive.google.com/file/d/1JP0_BdGqNwcj2nZ4IxQncXTpU_-fAk79/view?usp=sharing'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
