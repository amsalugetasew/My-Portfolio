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
import "../Mystyle.scss"

const Header = () => (
     <Container className='container' id='home'>
    
    <Div1>
      <Link id='sty' to="/" >
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2 className='Div2'>
      
      <li>
        <Link style={{textDecoration: "none"}} to="#projects" smooth>
          <NavLink className='NavLink'>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#tech" style={{textDecoration: "none"}}  smooth>
          <NavLink className='NavLink'>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link to="#test" style={{textDecoration: "none"}}  smooth>
          <NavLink className='NavLink'>Testimonials</NavLink>
        </Link>
      </li>
      <li>
        <Link style={{textDecoration: "none"}} to="#about" smooth>
          <NavLink className='NavLink'>About</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link style={{textDecoration: "none"}} to="#inv" smooth>
          <NavLink className='NavLink'><KeyboardDoubleArrowDownIcon/></NavLink>
        </Link>
      </li> */}
      {/* <li>
        <Link style={{textDecoration: "none"}} to="#chart" smooth>
          <NavLink className='NavLink' id='chars'>Professional Chart</NavLink>
        </Link>
      </li> */}
      
    </Div2>
    <Div3 className='Div3'>
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
  // </div>
);

export default Header;
