import React from 'react'
import BgAnimation from "./BackgrooundAnimation/BackgroundAnimation";
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Technologies from "./Technologies/Technologies";
import Testimonials from "./Testimonials/Testimonials";
import Timeline from "./TimeLine/TimeLine";
import { Layout } from "./layout/Layout";
import { Section } from "../styles/GlobalComponents";
function Home() {
  return (
    <div>
        <Layout>
       <Section grid> 
        <Me />
       <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Testimonials />
      <Timeline />
    </Layout> 
    </div>
  )
}

export default Home