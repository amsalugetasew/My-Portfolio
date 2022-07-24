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
import MyProfile from "../../image/gechP.jpg"
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
      <Link to="#about" smooth className="button" id="btn">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
    <LeftSection >
      <SectionTitleStack>
        <img className="img" id="img"
        src={MyProfile} alt="" />
        </SectionTitleStack>
    </LeftSection>
  </Section>
);

export default Me;
