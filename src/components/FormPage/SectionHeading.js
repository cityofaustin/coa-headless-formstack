import React from 'react';

const SectionHeading = ({ field }) => {
  return (!!field.section_break) ?
    <h1>{field.section_heading}</h1> :
    <h2>{field.section_heading}</h2>
};

export default SectionHeading;
