import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
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
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main><Link style={{textDecoration: "none"}} to="#home" smooth>Projects</Link></SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BlogCard>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
                <CardInfo>{description}</CardInfo>

                <UtilityList>
                  <ExternalLinks href={source}>
                    <AiFillGithub />
                  </ExternalLinks>
                  <ExternalLinks href={visit}>View Site</ExternalLinks>
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
