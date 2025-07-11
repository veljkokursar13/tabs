import React from 'react'
import { Duties } from './Duties'

export const JobInfo = ({jobs, currentItem}) => {
  const {company, dates, duties, title} = jobs[currentItem];
  return (
    <div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        <Duties duties={duties} />
    </div>
  )
}