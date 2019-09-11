import React from 'react';
import { useSelector } from 'react-redux';

const FieldContainer = ({field, lang}) => {
  console.log(`${field.id} info:`, field)
  const value = useSelector(state => state.fields[field.id]);

  return (
    <div>
      {field.section_heading && `Heading: ${field.section_heading}`}
      {field.label && `Label: ${field.label}`}
      {`  Value is [${value}]`}
    </div>
  );
};

export default FieldContainer;
