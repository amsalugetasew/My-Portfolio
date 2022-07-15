import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TestimonialsStyles";
import {HashLink as Link} from 'react-router-hash-link'
const Technologies = () => (
  <Section id="test">
    <Section />
    <SectionTitle><Link style={{textDecoration: "none"}} to="#home" smooth>Testimonials</Link></SectionTitle>

    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Abrham G. CEO Alright Technologies</ListTitle>
          <ListParagraph>
            "" With Getasew’s help, we were able to increase the functionality
            of our website dramatically while cutting our costs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>William M.</ListTitle>
          <ListParagraph>
            "" Without doubt one of the most talented programmers out there. I
            always go back to Getasew when I'm out of my depth and he's never
            failed to deliver what I ask for. Smart, trustworthy and
            professional. You won't be disappointed.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Abrham G.</ListTitle>
          <ListParagraph>
            "" Getasew is a great help managing a very out of date website.
            Everything we ask him to do is done quickly and efficiently, we
            would be lost without him.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
