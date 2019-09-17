import React from 'react';
import { useSelector } from 'react-redux';

import SectionHeading from 'src/FormPage/SectionHeading';
import FormSection from 'src/FormPage/FormSection';
import FooterNav from 'src/FormPage/FooterNav';

const FormPage = ({ sectionField, sections, pageIndex, formHomePath, pages }) => {
  const lang = useSelector(state => state.lang);

  return (
    <div>
      <SectionHeading
        sectionField={sectionField}
        pageHeading={true}
      />
      <span>This page is in {lang}</span>
      {sections && sections.map((section, i)=>(
        <FormSection
          key={i}
          section={section}
        />
      ))}
      <FooterNav
        pageIndex={pageIndex}
        formHomePath={formHomePath}
        pages={pages}
      />
    </div>
  );
};

export default FormPage;
