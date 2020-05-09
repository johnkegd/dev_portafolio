import React from 'react';
import Section from '../components/Section';
import Triangle from '../components/Triangle';



const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="backgroundDark"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['15vh', '25vh']}
      width={['55vw', '50vw']}

    />

    <Triangle
      color="primary"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);


const Courses = () => (
  <Section.Container id="courses" Background={Background}>
    <Section.Header name="Courses" icon="💼 " label="portfolio" />
    
  </Section.Container>
);

export default Courses;
