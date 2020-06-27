import React from 'react'
import styled from 'styled-components'

import Title from './Title'
import Instructor from './Instructor'

import { instructors, teachers } from '../../data/instructorsData.json';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @supports (-ms-accelerator: true) {
    justify-content: space-around;
  }
`

const makeInstructorcomponents = (instructor, props) => {
  const imageData = props.data.find(image => (
    image.name === instructor.photoName
  ))
  return (
    < Instructor
      key={instructor.photoName}
      title={instructor.name}
      subtitle={instructor.position}
      link={instructor.link}
      photo={imageData.image.fluid}
    />
  )
}



export default (props) => {

  const Instructors = instructors.map(instructor => makeInstructorcomponents(instructor, props));
  const Teachers = teachers.map(teacher => makeInstructorcomponents(teacher, props));

  return (
    <div>
      <Title>Instruktorzy Studio Wella</Title>
      <Container>
        {Instructors}
      </Container>
      <Title>Edukatorzy Studio Wella</Title>
      <Container>
        {Teachers}
      </Container>
    </div>
  )
}
