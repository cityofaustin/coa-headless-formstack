import React from 'react';

const FormPage = (props) => {
  const { fields } = props;
  console.log("my Fields:", fields)

  return (
    <div>
      <h1>Hi here is a formy page.</h1>
      <h2>It has these fields:</h2>
      <ul>
        {fields.map((field, i)=>(
          <li key={i}>
            {field.section_heading && `Heading: ${field.section_heading}`}
            {field.label && `Label: ${field.label}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormPage;
