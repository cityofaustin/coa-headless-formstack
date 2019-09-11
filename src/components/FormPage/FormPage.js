import React from 'react';
import { useSelector } from 'react-redux';

import SectionHeading from 'src/components/FormPage/SectionHeading';
import FieldContainer from 'src/components/containers/FieldContainer';
import FooterNav from 'src/components/FormPage/FooterNav';

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
      <SectionHeading
        mainHeading={true}
        field={header}
      />
      {remainingFields.map((field, i)=>{
        if (field.type === "section") {
          return (
            <SectionHeading
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
      <FooterNav
        pageNumber={pageNumber}
        landingPagePath={landingPagePath}
        pages={pages}
      />
    </div>
  );
};

export default FormPage;
