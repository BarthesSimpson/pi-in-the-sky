import React from 'react'
import styled from 'styled-components'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'

const ChartWrapper = styled.div`
  margin: 1em 0;
`

export default ({ data }) => {
  // console.log(data)
  return (
    <ChartWrapper>
      <BarChart width={730} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="tally" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ChartWrapper>
  )
}
