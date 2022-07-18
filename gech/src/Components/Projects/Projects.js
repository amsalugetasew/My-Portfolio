import React from "react";
import {
  AiFillGithub,
} from "react-icons/ai";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { motion } from "framer-motion";
import {HashLink as Link} from 'react-router-hash-link'
import "../Mystyle.scss"
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle className="p" main><Link style={{textDecoration: "none"}} to="#home" smooth>Projects</Link></SectionTitle>
    <GridContainer className="GridContainer">
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BlogCard className="BlogCard">
              <Img src={image}  />
              <TitleContent>
                <HeaderThree title className="ttl">{title}</HeaderThree>
                <Hr />
                <CardInfo id="CardInfo" className="CardInfo">{description}</CardInfo>

                <UtilityList className="vw">
                  <ExternalLinks id="vs" href={source}>
                    <AiFillGithub />
                  </ExternalLinks>
                  <ExternalLinks id="vs" href={visit}>View Site</ExternalLinks>
                </UtilityList>
              </TitleContent>
            </BlogCard>
          </motion.div>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
