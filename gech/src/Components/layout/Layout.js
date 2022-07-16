import React from 'react'

import Footer from "../Footer/Footer"
import Header from '../Header/Header'
import { Container } from './LayoutStyles'
// import { HashLink as Link } from 'react-router-hash-link'
// import {
//   Section,
//   SectionTitle,
// } from "../../styles/GlobalComponents";




// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: "Skill",
//     ReactJS: 90,
//     ExpressJS: 60,
//     MongoDB: 60,
//     NodeJS: 70
//   }
// ];





export const Layout = ({ children }) => {
  return (
    <Container>
      <Header/>
      <main>{children}</main>
      {/* <Section id="chart">
        <SectionTitle><Link style={{ textDecoration: "none", alignItems: "center" }} to="#home" smooth> Professional Chart</Link></SectionTitle>
        <div>
          <div className="row d-flex justify-content-center text-center">
            <hr />
            <div className="col-md-8">
              <ResponsiveContainer width={400} height={400} className="text-center">
              <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: -10,
            left: 60,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis  dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ReactJS" fill="#0088FE" />
          <Bar dataKey="ExpressJS" fill="#00C49F" />
          <Bar dataKey="MongoDB" fill="#FFBB28" />
          <Bar dataKey="NodeJS" fill="#FF8042" />
        </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        
      </Section> */}
      <Footer />
    </Container>
  )
}
