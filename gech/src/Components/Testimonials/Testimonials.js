import React from "react";
import {
  Section,
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
import "../Mystyle.scss"
const Technologies = () => (
  <Section id="test">
    <Section />
    <SectionTitle><Link style={{textDecoration: "none"}} to="#home" smooth>Testimonials</Link></SectionTitle>

    <List id="Listt">
      {/* <div id="Listt"> */}
      <ListItem className="ListItemt">
        <ListContainer className="ListContainerT">
          <ListTitle className="ListTitle">Abrham G. CEO Alright Technologies</ListTitle>
          <ListParagraph className="ListParagraph">
            "" With Getasew’s help, we were able to increase the functionality
            of our website dramatically while cutting our costs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle className="ListTitle">William M.</ListTitle>
          <ListParagraph className="ListParagraph">
            "" Without doubt one of the most talented programmers out there. I
            always go back to Getasew when I'm out of my depth and he's never
            failed to deliver what I ask for. Smart, trustworthy and
            professional. You won't be disappointed.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle className="ListTitle">Abrham G.</ListTitle>
          <ListParagraph className="ListParagraph">
            "" Getasew is a great help managing a very out of date website.
            Everything we ask him to do is done quickly and efficiently, we
            would be lost without him.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* </div> */}
    </List>
  </Section>
);

export default Technologies;
