import React from 'react';

const SectionHeading = ({ sectionField, pageHeading }) => {
  if (sectionField) {
    if (!Number(sectionField.hide_label)) {
      if (pageHeading) {
        return (
          <h1>{sectionField.section_heading}</h1>
        )
      } else {
        return (
          <h2>{sectionField.section_heading}</h2>
        )
      }
    }
  }
  return <></>;
};

export default SectionHeading;
