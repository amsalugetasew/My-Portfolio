import React from 'react'

import Footer from "../Footer/Footer"
import Header from '../Header/Header'
import { Container } from './LayoutStyles'
import {HashLink as Link} from 'react-router-hash-link'
import { PieChart, Pie, Cell } from 'recharts';
import {
  Section,
  SectionTitle,
} from "../../styles/GlobalComponents";
const data = [
  { title: "React", name: 'Group A', value: 400 },
  { title: "React", name: 'Group B', value: 300 },
  { title: "React", name: 'Group C', value: 300 },
  { title: "React", name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main>
     <Section id="chart">
     <SectionTitle><Link style={{textDecoration: "none", alignItems:"center"}} to="#home" smooth> Professional Chart</Link></SectionTitle>
     <PieChart width={400} height={400} id="chart">
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        </Section>
        <Footer/>
    </Container>
  )
}
