import React from "react";
import {HashLink as Link} from 'react-router-hash-link'
import { NavLink } from "../Header/HeaderStyles";
import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleStack,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MeStyles";

const Me = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi, I am Getasew
        <br />
      </SectionTitle>
      <SectionTitleStack>React.JS Developer</SectionTitleStack>
      <SectionText>I turn problems into usable solutions.</SectionText>
      <Link to="#about" smooth>
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Me;
