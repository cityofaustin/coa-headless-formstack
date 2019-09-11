import React from 'react';
import { useSelector } from 'react-redux';

import FieldContainer from 'src/components/containers/FieldContainer';
import FormPageFooter from 'src/components/sections/FormPageFooter';

const FormPage = ({ pageNumber, fields, landingPagePath, pages }) => {
  const lang = useSelector(state => state.lang);
  const heading = fields[0].section_heading || null;

  return (
    <div>
      <h1>{heading}</h1>
      <span>This page is in {lang}</span>
      <h2>It has these fields:</h2>
      <ul>
        {fields.map((field, i)=>(
          <li key={i}>
            <FieldContainer field={field} lang={lang}/>
          </li>
        ))}
      </ul>
      <FormPageFooter
        pageNumber={pageNumber}
        landingPagePath={landingPagePath}
        pages={pages}
      />
    </div>
  );
};

export default FormPage;
