import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import {HashLink as Link} from 'react-router-hash-link'
import "../Mystyle.scss"
const Technologies = () => (
  <Section id="tech">
    <Section />
    <SectionTitle><Link style={{textDecoration: "none"}} to="#home" smooth> Technologies</Link></SectionTitle>
    <SectionText className="st">
      I've worked with a range of technologies in the web development world,
      from Design to Back-end
    </SectionText>
    <List className="List" id="List">
      <ListItem>
        <DiZend size="3rem" className="dz" />
        <ListContainer className="ListContainer">
          <ListTitle className="ListTitle">UI/UX</ListTitle>
          <ListParagraph className="ListParagraph">Figma, Adobe</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle className="ListTitle">Front-End</ListTitle>
          <ListParagraph className="ListParagraph">React.js, Next.js, Redux</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle className="ListTitle">Back-End</ListTitle>
          <ListParagraph className="ListParagraph">Express.js, Node.js, Firebase, MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
