import React from "react";
import {HashLink as Link} from 'react-router-hash-link'
import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleStack,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MeStyles";
import MyProfile from "../../image/me.PNG"
import "../Mystyle.scss"
const Me = (props) => (
  <Section row nopadding className="Section">
    <LeftSection className="LeftSection">
      <SectionTitle className="SectionTitle">
        Hi, I am Getasew
        <br />
      </SectionTitle>
      <SectionTitleStack className="SectionTitleStack">React.JS Developer</SectionTitleStack>
      <SectionText className="SectionText">I turn problems into usable solutions.</SectionText>
      <Link to="#about" smooth className="button">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
    <LeftSection style={{marginLeft:"80px"}}>
      {/* <SectionTitle>
        Professional Statistics 
        <br />
      </SectionTitle> */}
      <SectionTitleStack>
        <img className="img"
        src={MyProfile} alt="" />
        </SectionTitleStack>
      {/* <SectionText>I turn problems into usable solutions.</SectionText> */}
      {/* <Link to="#about" smooth>
        <Button>Learn More</Button>
      </Link> */}
    </LeftSection>
  </Section>
);

export default Me;
