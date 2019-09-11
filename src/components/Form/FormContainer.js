import React, { useState } from 'react';
import { Router, Redirect } from '@reach/router';

import FormPage from 'src/components/Form/FormPage';
import FormLandingPage from 'src/components/Form/FormLandingPage';
import FormHeader from 'src/components/Form/FormHeader';
import { getPages } from 'src/helpers/data';

const FormContainer = (props) => {
  const [lang, setLang] = useState('en');

  const { data } = props.pageContext;
  const { fields, coaConfig: {name, pathPrefix} } = data;
  const pages = getPages(fields, pathPrefix);

  return (
    <div>
      <FormHeader
        setLang={setLang}
        landingPagePath={pathPrefix}
      />
      <Router>
        <FormLandingPage
          path={pathPrefix}
          name={name}
          pages={pages}
          lang={lang}
        />
        {pages.map((page, i)=>(
          <FormPage
            key={i}
            path={page.path}
            fields={page.fields}
            lang={lang}
          />
        ))}
        <Redirect
          from={`${pathPrefix}/*`}
          to={pathPrefix}
          noThrow
        />
      </Router>
    </div>
  );
};

export default FormContainer;
