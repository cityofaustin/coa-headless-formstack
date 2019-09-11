import React from 'react';

const SectionHeading = ({ mainHeading, field }) => {
  return mainHeading ?
    <h1>{field.section_heading}</h1> :
    <h2>{field.section_heading}</h2>
};

export default SectionHeading;
