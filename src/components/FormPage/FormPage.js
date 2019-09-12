import React from 'react';
import { useSelector } from 'react-redux';

import FieldContainer from 'src/components/containers/FieldContainer';
import FooterNav from 'src/components/FormPage/FooterNav';

const FormPage = ({ pageIndex, fields, landingPagePath, pages }) => {
  const lang = useSelector(state => state.lang);

  console.log("~~~ This page has these fields", fields)
  return (
    <div>
      <span>This page is in {lang}</span>
      {fields.map((field, i)=>(
        <FieldContainer
          key={i}
          field={field}
        />
      ))}
      <FooterNav
        pageIndex={pageIndex}
        landingPagePath={landingPagePath}
        pages={pages}
      />
    </div>
  );
};

export default FormPage;
