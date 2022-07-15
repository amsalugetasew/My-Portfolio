// import Link from "next/link";
// import { Link } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container id='home'>
    <Div1>
      <Link style={{textDecoration: "none",display: "flex",
            color: "#f5f5f5",
            opacity:"0.8",
            marginLeft: "20px",
            marginTop: "18px"}} to="/" >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link style={{textDecoration: "none"}} to="#projects" smooth>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#tech" style={{textDecoration: "none"}}  smooth>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#test" style={{textDecoration: "none"}}  smooth>
          <NavLink>Testimonials</NavLink>
        </Link>
      </li>
      <li>
        <Link style={{textDecoration: "none"}} to="#about" smooth>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/amsalugetasew">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/amsalugetasew16">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/getasew-amsalu">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
