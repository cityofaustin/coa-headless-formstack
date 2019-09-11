import React from 'react';

const FieldContainer = ({field, lang}) => {
  console.log(`${field.id} info:`, field)

  return (
    <div>
      {field.section_heading && `Heading: ${field.section_heading}`}
      {field.label && `Label: ${field.label}`}
    </div>
  );
};

export default FieldContainer;
