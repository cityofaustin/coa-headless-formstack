import React from 'react';

import SectionHeading from 'src/FormPage/SectionHeading';
import FieldContainer from 'src/fields/FieldContainer';

const FormSection = ({ section: { sectionField, fields } }) => {
  return (
    <div>
      <SectionHeading
        sectionField={sectionField}
      />
      {fields && fields.map((field, i)=>(
        <FieldContainer
          key={i}
          field={field}
        />
      ))}
    </div>
  );
};

export default FormSection;
