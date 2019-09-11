import React from 'react';
import { useSelector } from 'react-redux';

import FormPageHeader from 'src/components/FormPage/Header';
import FormPageSectionHeading from 'src/components/FormPage/SectionHeading';
import FieldContainer from 'src/components/containers/FieldContainer';
import FormPageFooter from 'src/components/FormPage/Footer';

const FormPage = ({ pageNumber, fields, landingPagePath, pages }) => {
  const lang = useSelector(state => state.lang);

  let header, remainingFields;
  if (fields[0].section_heading) {
    header = fields[0];
    remainingFields = fields.slice(1);
  } else {
    header = null;
    remainingFields = fields.slice(0);
  }

  return (
    <div>
      <span>This page is in {lang}</span>
      <FormPageHeader
        field={header}
      />
      {remainingFields.map((field, i)=>{
        if (field.type === "section") {
          return (
            <FormPageSectionHeading
              key={i}
              field={field}
            />
          )
        } else {
          return (
            <FieldContainer
              key={i}
              field={field}
            />
          )
        }
      })}
      <FormPageFooter
        pageNumber={pageNumber}
        landingPagePath={landingPagePath}
        pages={pages}
      />
    </div>
  );
};

export default FormPage;
